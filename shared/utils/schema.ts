import z from 'zod';
import { ru } from 'zod/locales';

z.config(ru());

const REQUIRED_MESSAGE = 'Обязательно для заполнения';

export const orderSchema = z.object({
  fullname: z.string().trim().min(1, REQUIRED_MESSAGE),
  address: z.string().trim().min(1, REQUIRED_MESSAGE),
  phone: z.string(REQUIRED_MESSAGE).trim().min(18, 'Некорректный номер телефона'),
  deliveryDate: z.string(REQUIRED_MESSAGE).trim().length(10, REQUIRED_MESSAGE),
});

export type OrderSchema = z.output<typeof orderSchema>;
