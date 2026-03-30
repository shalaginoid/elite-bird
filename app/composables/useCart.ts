import { useLocalStorage } from '@vueuse/core';

interface CartItem {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
  discountThreshold: number;
  discountRate: number;
}

export const useCart = () => {
  const toast = useToast();

  const cart = useLocalStorage<CartItem[]>('shopping-cart', []);

  // Очистка корзины
  const clearCart = () => {
    cart.value = [];
  };

  // Добавление в корзину
  const addToCart = (product: Omit<CartItem, 'quantity'>) => {
    const existingItem = cart.value.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.value.push({ ...product, quantity: 1 });
    }

    toast.add({
      title: 'Товар добавлен!',
      description: `${product.name} теперь в корзине.`,
      icon: 'i-lucide-check',
      color: 'success',
    });
  };

  // Обновление корзины
  const updateQuantity = (id: number, delta: number) => {
    const item = cart.value.find((i) => i.id === id);
    if (item) {
      const newQuantity = item.quantity + delta;

      if (newQuantity > 0) {
        item.quantity = newQuantity;
      } else {
        // Если количество < 1, удаляем товар
        removeFromCart(id);
      }
    }
  };

  // Удаление товара из корзины
  const removeFromCart = (id: number) => {
    cart.value = cart.value.filter((item) => item.id !== id);
  };

  // Итого
  const totalItems = computed(() => cart.value.reduce((sum, item) => sum + item.quantity, 0));

  // Расчет стоимости ОДНОЙ позиции с учетом её личных настроек
  const getItemSubtotal = (item: CartItem) => {
    const rawTotal = item.price * item.quantity;

    // Проверяем личный порог товара
    if (rawTotal >= item.discountThreshold) {
      return rawTotal * (1 - item.discountRate);
    }
    return rawTotal;
  };

  // Общая сумма (сумма всех subtotal)
  const totalPrice = computed(() => cart.value.reduce((sum, item) => sum + getItemSubtotal(item), 0));

  // Сумма без учета всех скидок
  const originalPrice = computed(() => cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0));

  return {
    cart,
    addToCart,
    removeFromCart,
    getItemSubtotal,
    updateQuantity,
    clearCart,
    totalPrice,
    originalPrice,
    totalItems,
  };
};
