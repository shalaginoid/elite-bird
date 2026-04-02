import moment from 'moment';

export default defineEventHandler(async (event) => {
  const { sendMail } = useNodeMailer();

  const payload = await readValidatedBody(event, (body) => orderSchema.safeParse(body));

  if (!payload.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
    });
  }

  const data = payload.data;

  const order = data.order.map(({ id, image, discountThreshold, discountRate, description, ...rest }) => rest);

  const html = `
    <p>Заказчик: ${data.fullname}</p>
    <p>Телефон: ${data.phone}</p>
    <p>Адрес доставки: ${data.address}</p>
    <p>Дата доставки: ${moment(data.deliveryDate).format('DD.MM.YYYY')}</p>

    <br/>
    <p>Заказ:</p>

    <table cellspacing="10">
      <tr><th>Наименование</th><th>Цена</th><th>Количество</th></tr>
      ${order
        .map(
          (item: Product) => `
        <tr>
          <td>${item.name}</td>
          <td>${item.price}</td>
          <td>${item.quantity}</td>
        </tr>`,
        )
        .join('')}
    </table>

    <br/>
    <p>Итого: ${data.total} руб.</p>
  `;

  try {
    await sendMail({
      subject: 'Тест',
      to: data.email,
      html,
    });

    return sendNoContent(event, 200);
  } catch (error: any) {
    console.log(error.message);

    throw createError({
      status: 500,
      message: error.message,
    });
  }
});
