export default {
  authorization: 'Avtorizatsiya',
  username: 'Login',
  password: 'Parol',
  enter: 'Kirish',
  language: 'Til',
  new_client: "Yangi foydalanuvchi",
  new_order: "Yangi buyurtma",
  user_registration: "Yangi foydalanuvchini ro’yxatdan o’tkazish",
  birth_date: "Tug'ilgan sanasi",
  birth_date_mask: "kk.oo.yyyy",
  passport: "Pasport seriyasi va raqami (lotin xarflari)",
  passport_mask: "AA 0000000",
  phone_login: "Telefon raqami / login",
  passport_scan: "Pasport skanini yuklash",
  passport_expire: "Pasport muddati",
  passport_scan_2: "Pasportda ro'yxatdan o'tganlik joyi skani",
  passport_scan_mask: "Fayl (formatlar .jpg, .jpeg, .png, maksimal 5 MB)",
  continue: "Davom ettirish",
  home: "Asosiy",
  logout: "Chiqish",
  agreement: 'Tasdiqlayman <a target="_blank" href="https://intend.uz/uz/ommaviy-oferta-intend-uz-dan-foydalanish-shartlari-va-talablariga-rozilik-togrisida/">ofertani</a>',
  registration_credentials: 'Tizim talablari:</br>' +
    '– kartaga SMS-xabarnoma xizmati ulangan bo’lishi;<br/>' +
    '– oxirgi 3 oy davomida kartadagi ish haqi barqaror tushgan bo’lishi.',
  registration_details: 'Pasport skanini va selfi fotosuratini yuklashdan oldin quyidagilarga ishonch hosil qiling:' +
    '<ul>' +
    '<li>pasport skani hujjatning aslidan olinganligiga <strong>(kseronusxasi qabul qilinmaydi)</strong>;</li>' +
    '<li>pasport skani rangli ekanligiga;</li>' +
    '<li>skanerlash va selfiga olish chog’ida pasport sahifasi to’liq hamda barmoqlar bilan yopilmaganligiga;</li>' +
    '<li>suratga olish paytida yarqiragan joylari yoqligiga.</li>' +
    '</ul>',
  file_uploaded: "Fayl yuklandi",
  man: "Erkak",
  woman: "Ayol",
  gender: "Jinsi",
  f_name: "Ismi",
  l_name: "Nasabi",
  m_name: "Otasining ismi",
  f_name_latin: "Ismi (lotin xarflari)",
  l_name_latin: "Nasabi (lotin xarflari)",
  m_name_latin: "Otasining ismi (lotin xarflari)",
  passport_date: "Pasport berilgan sana",
  passport_date_mask: "kk.oo.yyyy",
  find_pinfl: "Qo'llanma",
  find_inn: "STIRni aniqlash",
  pinfl: "JShShIR",
  inn: "STIR",
  reg_region: "Ro'yxatda turish viloyati",
  reg_district: "Ro'yxatda turish tumani",
  reg_address: "Ro'yxatda turish manzili",
  live_address: "Yashash manzili",
  reg_address_latin: "Ro'yxatda turish manzili (lotin xarflari)",
  live_address_latin: "Yashash manzili (lotin xarflari)",
  pan: "Bank karta raqami",
  expire: "Karta muddati",
  pin: "Tasdiqlash kodi",
  new_password: "Yangi kirish paroli",
  password_confirmation: "Kirish parolini tasdiqlang",
  phone: "Telefon raqami",
  agree: "Roziman",
  check_card: "Kartani tekshirish",
  resend_sms: "SMS",
  applications: "Zayavkalar",
  orders: "Buyurtmalar",
  full_name: "F.I.Sh.",
  status: "Holat",
  deposit: "Depozit",
  enter_client_phone: "Foydalanuvchi telefon raqami (login) ni kiriting",
  price: "Narxi",
  edit: "O'zgartirish",
  show: "Ko'rish",
  order_number: "# {id} buyurtma",
  client_is: "Foydalanuvchi: {client}",
  set_price: "Narxni kiriting",
  product: "Tovar",
  duration: "Muddat (oy)",
  currency: "so'm",
  delete: "O'chirish",
  add_product: "Tovar qo'shish",
  set: "Kiritish",
  cancel: "Bekor",
  send_to_approve: 'Tasdiqlash uchun jo\'natish',
  sub_total: "Jami",
  total_credit: "Bo'lib-bo'lib to'lash sharti bilan",
  send_agreement: "Davom eting",
  order_sent_to_approve: 'Foydalanuvchiga yuborildi',
  validation: {
    "alpha": "Поле {_field_} может содержать только буквы",
    "alpha_dash": "Поле {_field_} может содержать только буквы, цифры и дефис",
    "alpha_num": "Поле {_field_} может содержать только буквы и цифры",
    "alpha_spaces": "Поле {_field_} может содержать только буквы и пробелы",
    "between": "Поле {_field_} должно быть между {min} и {max}",
    "confirmed": "Поле {_field_} не совпадает с {target}",
    "digits": "Поле {_field_} должно быть числовым и длиной {length}",
    "dimensions": "Поле {_field_} должно быть {width} пикселей на {height} пикселей",
    "email": "Поле {_field_} должно быть действительным электронным адресом",
    "excluded": "Поле {_field_} должно быть допустимым значением",
    "ext": "Поле {_field_} должно быть действительным файлом. ({args})",
    "image": "Поле {_field_} должно быть изображением",
    "oneOf": "Поле {_field_} должно быть допустимым значением",
    "integer": "Поле {_field_} должно быть целым числом",
    "length": "Длина поля {_field_} должна быть {length}",
    "max": "Поле {_field_} не может быть более {length} символов",
    "max_value": "Поле {_field_} должно быть {max} или менее",
    "mimes": "Поле {_field_} должно иметь допустимый тип файла. ({args})",
    "min": "{_field_} qator uzunligi {length} dan kam bo'lmasligi shart",
    "min_value": "Maydon {_field_} {min} yoki undan ko'p bo'lishi kerak",
    "numeric": "Поле {_field_} должно быть числом",
    "regex": "Поле {_field_} имеет ошибочный формат",
    "required": "Ushbu qator to'ldirilishi shart",
    "required_if": "Поле {_field_} обязательно для заполнения",
    "size": "Поле {_field_} должно быть меньше, чем {size}KB",
    "length_format": "Noto'g'ri format",
    "price": "Не верная сумма",
    minLength: "Поле должно быть не менее {min} символов",
    sameAs: "Поле не совпадает с {target}",
  },
  info: {
    otp_sent: "Tasdiqlash kodi telefon {phone} raqamingizga yuborildi, iltimos uni kiriting",
    otp_sent_ttl: "Tasdiqlash kodi telefon {phone} raqamingizga yuborildi, iltimos uni {ttl} daqiqada kiriting",
    registration_success: "<span> Tabriklaymiz! </span> Siz muvaffaqiyatli ro'yxatdan o'tdingiz!",
    application_registration_success: "<span>Siz muvaffaqiyatli ro'yxatdan o'tdingiz.</span> Sizning yillik cheklov summangiz {limit} so'm.<br/>Ushbu mablag'lardan foydalanish uchun Siz shartnoma imzolashingiz kerak.<br/>Qo'ng'irog'imizni kuting",
    partner_registration_success: "<span> Tabriklaymiz! </span> Sizning so'rovingiz muvaffaqiyatli qabul qilindi!<br/><span>Qo'ng'irog'imizni kuting!</span>",
    partner_info: "Hamkor to'g'risida ma'lumot",
    your_login_is: "Sizning login: <strong>{username}</strong>",
    restore: "Parolni tiklash",
    password_changed: "Parol o'zgartirildi",
    correct_errors: "Iltimos quyidagi xatolikni to'g'irlang",
    max_file_size: "Fayl hajmi 5 Mb dan oshmasligi shart",
    application_registration_yellow_success: "<span>Qo'shimcha o'rganish talab etiladi.</span><br/>Agar natija muvaffaqiyatli bo'lsa, yillik cheklov summangiz {limit} so’mni tashkil qilishi mumkin.<br/>Qo'shimcha ma'lumotni kuting",
    application_registration_green_success: "<span>Siz muvaffaqiyatli ro'yxatdan o'tdingiz.</span><br/>Sizning yillik cheklov summangiz {limit} so'm.<br/>Ushbu mablag'lardan foydalanish uchun Siz shartnoma imzolashingiz kerak.<br/>Qo'ng'irog'imizni kuting",
    application_registration_red_success: "<span>Qo'shimcha o'rganish talab etiladi.</span><br/>Agar natija muvaffaqiyatli bo'lsa, yillik cheklov summangiz {limit} so’mni tashkil qilishi mumkin.<br/>Qo'shimcha ma'lumotni kuting",
    your_limit_is: "Sizga beriladigan limit {limit} so'm bo'lishi mumkin",
    member_found: "Foydalanuvchi topildi!",
    currency: 'so\'m',
    product: 'Mahsulot',
    price: "Narx",
    pcs: 'dona',
    per_month: "oyiga {per_month}dan",
    order: 'Buyurtma',
    member: 'Foydalanuvchi',
    merchant: 'Hamkor',
    store: "Do'kon",
    order_paid: "Buyurtma to'landi!",
    order_canceled: "Buyurtma rad qilindi!",
    application_registration_completed: "<span>Ждите результат проверки...</span><br/>Ждите SMS.",
  },
  error: {
    timeout: "Истекло время ожидания, пожалуйста проверьте Интернет соединение и повторите попытку.",
    request_error: "Возникла ошибка при выполнении запроса. Повторите попытку и сообщите о проблеме в call-центр +998 55 500 7 500",
    unknown_error: "Возникла ошибка при выполнении запроса. Повторите попытку и сообщите о проблеме в call-центр +998 55 500 7 500",
  },
  titles: {
    my_orders: 'Buyurtmalarim',
    my_profile: "Profilim",
    new_order: "Yangi buyurtma",
    new_order_client: 'Yangi buyurtma, foydalanuvchi {username}',
    product: 'Mahsulot',
    order: 'Buyurtma #{order_id}',
    order_status: 'Holati: <span>{status}</span>',
    order_status_canceled: 'Bekor qilingan', // -1 - canceled, 0 - new, 1 - approving, 2 - approved
    order_status_new: 'Yangi',
    order_status_approving: 'Ko\'rib chiqilmoqda',
    order_status_approved: "To'langan",
    balance: 'Balans',
    payment_graph: "To'lov jadvali",
  },
  quantity: 'Soni',
  with_delivery: 'Yetkazib berish bilan',
  description: 'Tavsif',
  product_type: 'Mahsulot turi',
  townfrom: 'Manzildan',
  townto: 'Manzilgacha',
  delivery_cost: 'Yetkazib berish narxi',
  phone_client: "Mijozning telefon raqami",
  are_you_sure_delivery : "Rostan yetkazib berish statusini o'zgartirmoqchimisiz? Buyurtma tozalanadi",
  yes: "Ha",
  cost_products: "Mahsulot narxi",
  selfie: "Pasport bilan selfi",
  how_to: {
    selfie: "Qanday qilib pasport bilan selfi qilish kerak",
    selfie_text: "Siz mijozning fotosuratini yuklashingiz zarur.<br/>Fotosurat aniq, to'g'ri va mijoz qo'lida ochiq pasport bilan selfi uslubida bo'lishi lozim.<br/>Fotosurat hajmi 5 MB dan oshmasligi kerak.",
  },
  loading: "Yuklanmoqda...",
  forgot_password: "Parolni unutdingizmi?",
  next: 'Davom etish',
  save: 'Saqlash',
  more: 'Batafsil',
  no_orders_yet: 'Пока у вас нет заказов!',
  no_cards_yet: 'Пока у вас нет карты!',
  add_card: "Karta qo'shish",
  invalid_card_number: 'Неверный номер карты',
  set_pin_code: 'Введите код из смс',
  my_cards: "Mening kartalarim",
  confirm_your_phone: "На Ваш номер телефона { phone } был отправлен SMS с кодом подтверждения.",
  confirm_code: 'Подтвердите код',
  send: 'Отправить ',
  authorization_checking: "Проверка авторизации...",
  authorization_error: "Ошибка авторизации",
  no_payments_yet: 'Пока у вас нет платежей!',
  payment_graph: "To'lov grafiki",
  date: "Sana",
  summa: 'Summa',
  remain: 'Qolgan',
  repayment: "To'lov",
  new_card: "Yangi karta",
  approve: "Tasdiqlash",
  renew_main_card: "Asosiy kartani yangilash",
  your_new_limit_is: "Sizning yangi limitingiz {limit} so'm",
  add_another_card: "Boshqa karta qo'shish",
  main: "asosiy",
  additional: "qo'shimcha",
}
