import z from 'zod';
import { ru } from 'zod/locales';

z.config(ru());

const REQUIRED_MESSAGE = 'Обязательно для заполнения';

export const orderSchema = z.object({
  fullname: z.string(REQUIRED_MESSAGE),
  address: z.string(REQUIRED_MESSAGE),
  phone: z.string(REQUIRED_MESSAGE),
  deliveryDate: z.string(REQUIRED_MESSAGE),
});

export type OrderSchema = z.output<typeof orderSchema>;
