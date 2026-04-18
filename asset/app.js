/* =====================================================
   Heartbeat  – Dating App JavaScript
   ===================================================== */

'use strict';

// =====================================================
//  DATA
// =====================================================
const profiles = [
  {
    id: 1,
    name: 'Linh',
    age: 23,
    location: 'Hà Nội, 3 km',
    bio: 'Thích đọc sách, nghe nhạc indie và đi khám phá những quán cà phê xinh xắn 📚☕. Đang tìm ai đó để cùng xem phim vào cuối tuần 🎬',
    interests: ['📚 Đọc sách', '☕ Cà phê', '🎵 Indie', '🎬 Phim'],
    job: 'Graphic Designer tại FPT',
    education: 'ĐH Mỹ thuật Hà Nội',
    height: '162 cm',
    zodiac: 'Bảo Bình ♒',
    emoji: '🌸',
    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
    photos: ['img/ha_1.jpg', 'img/ha_2.jpg', 'img/ha_3.jpg'],
    isNew: true,
    status: 'active',
  },
  {
    id: 2,
    name: 'Minh',
    age: 26,
    location: 'TP.HCM, 5 km',
    bio: 'Kỹ sư phần mềm, đam mê gym 💪 và nấu ăn 👨‍🍳. Thích đi leo núi cuối tuần. Tìm người bạn đồng hành thú vị.',
    interests: ['💪 Gym', '🏔️ Leo núi', '👨‍🍳 Nấu ăn', '☕ Cà phê'],
    job: 'Software Engineer tại VNG',
    education: 'Đại học Bách Khoa HCM',
    height: '178 cm',
    zodiac: 'Bạch Dương ♈',
    emoji: '⚡',
    gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    photos: ['img/minh_1.jpg', 'img/minh_2.jpg', 'img/minh_3.jpg'],
    isNew: true,
    status: 'active',
  },
  {
    id: 3,
    name: 'Hà',
    age: 24,
    location: 'Đà Nẵng, 8 km',
    bio: 'Yêu biển 🌊, yêu du lịch ✈️ và yêu ẩm thực 🍜. Đã đặt chân đến 12 tỉnh thành. Mục tiêu: chinh phục hết Việt Nam!',
    interests: ['🌊 Biển', '✈️ Du lịch', '🍜 Ẩm thực', '📸 Chụp ảnh'],
    job: 'Marketing Manager',
    education: 'ĐH Kinh tế Đà Nẵng',
    height: '158 cm',
    zodiac: 'Song Ngư ♓',
    emoji: '🌺',
    gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
    photos: ['img/linh_1.jpg', 'img/linh_2.jpg', 'img/linh_3.jpg'],
    isNew: false,
    status: 'active',
  },
  {
    id: 4,
    name: 'Tuấn',
    age: 28,
    location: 'Hà Nội, 2 km',
    bio: 'Bác sĩ. Thích nghe jazz 🎷, chơi guitar 🎸 và đọc triết học 📖. Tìm người có thể nói chuyện được mãi không chán.',
    interests: ['🎷 Jazz', '🎸 Guitar', '📖 Triết học', '🍷 Rượu vang'],
    job: 'Bác sĩ tại BV Bạch Mai',
    education: 'ĐH Y Hà Nội',
    height: '174 cm',
    photos: ['img/tuan_1.jpg', 'img/tuan_2.jpg', 'img/tuan_3.jpg'],
    isNew: false,
    status: 'active',
  },
  {
    id: 5,
    name: 'An',
    age: 22,
    location: 'Cần Thơ, 15 km',
    bio: 'Sinh viên năm cuối chuyên ngành Báo chí. Mê viết 📝, mê ăn 🍡 và mê xem anime 🎎. Giao lưu thôi nào!',
    interests: ['📝 Viết lách', '🍡 Ẩm thực', '🎎 Anime', '📷 Nhiếp ảnh'],
    job: 'Sinh viên / Content Creator',
    education: 'Học viện Báo chí Tuyên truyền',
    height: '155 cm',
    zodiac: 'Kim Ngưu ♉',
    emoji: '🦋',
    gradient: 'linear-gradient(135deg, #fa709a, #fee140)',
    photos: ['img/an_1.jpg', 'img/an_2.jpg', 'img/an_3.jpg'],
    isNew: true,
    status: 'active',
  },
  {
    id: 6,
    name: 'Khoa',
    age: 27,
    location: 'Hải Phòng, 12 km',
    bio: 'Kiến trúc sư. Yêu cái đẹp trong từng chi tiết nhỏ 🏛️. Thích cà phê đen, nhạc lofi và những buổi sáng yên tĩnh.',
    interests: ['🏛️ Kiến trúc', '🎨 Nghệ thuật', '🎧 Lofi', '☕ Cà phê đen'],
    job: 'Senior Architect tại AIA',
    education: 'ĐH Kiến trúc Hà Nội',
    height: '180 cm',
    photos: ['img/khoa_1.jpg', 'img/khoa_2.jpg', 'img/khoa_3.jpg'],
    isNew: false,
    status: 'active',
  },
  {
    id: 7,
    name: 'Mai',
    age: 25,
    location: 'Huế, 200 km',
    bio: 'Giáo viên dạy Toán. Tưởng khô khan nhưng thực ra rất vui tính 😄. Thích làm bánh 🧁 và trồng cây 🌿.',
    interests: ['🧁 Làm bánh', '🌿 Trồng cây', '📚 Đọc sách', '🎉 Tiệc tùng'],
    job: 'Giáo viên tại THPT Quốc học Huế',
    education: 'ĐH Sư Phạm Huế',
    height: '160 cm',
    zodiac: 'Xử Nữ ♍',
    emoji: '🌻',
    gradient: 'linear-gradient(135deg, #fddb92, #d1fdff)',
    photos: ['img/mai_1.jpg', 'img/mai_2.jpg', 'img/mai_3.jpg'],
    isNew: true,
    status: 'active',
  },
  {
    id: 8,
    name: 'Hùng',
    age: 29,
    location: 'Hà Nội, 7 km',
    bio: 'Startup founder 🚀. Mỗi ngày đều là một cuộc phiêu lưu mới. Thích chạy bộ 🏃, đọc sách kinh doanh và uống trà oolong.',
    interests: ['🚀 Startup', '🏃 Chạy bộ', '📈 Kinh doanh', '🍵 Trà oolong'],
    job: 'CEO tại TechVN Startup',
    education: 'NEU – Kinh tế Quốc dân',
    height: '176 cm',
    photos: ['img/hung_1.jpg', 'img/hung_2.jpg', 'img/hung_3.jpg'],
    isNew: false,
    status: 'active',
  },
  {
    id: 9,
    name: 'Trang',
    age: 23,
    location: 'TP.HCM, 4 km',
    bio: 'Nhảy múa là cả cuộc đời 💃. Dancer chuyên nghiệp. Thích thử những món ăn lạ 🌮, xem sunset ở bờ biển và nghe nhạc EDM.',
    interests: ['💃 Nhảy', '🌮 Thử đồ ăn mới', '🌅 Sunset', '🎧 EDM'],
    job: 'Professional Dancer & Choreographer',
    education: 'Trường Múa Việt Nam',
    height: '163 cm',
    zodiac: 'Song Tử ♊',
    emoji: '💎',
    gradient: 'linear-gradient(135deg, #f7971e, #ffd200)',
    photos: ['img/trang_1.jpg', 'img/trang_2.jpg', 'img/trang_3.jpg'],
    isNew: true,
    status: 'active',
  },
  {
    id: 10,
    name: 'Đức',
    age: 30,
    location: 'Hà Nội, 9 km',
    bio: 'Nhiếp ảnh gia tự do 📷. Đi khắp Đông Nam Á chụp ảnh và kể chuyện. Yêu những khoảnh khắc chân thật của cuộc sống.',
    interests: ['📷 Nhiếp ảnh', '✈️ Du lịch', '☕ Cà phê', '🎬 Phim tài liệu'],
    job: 'Freelance Photographer',
    education: 'ĐH Khoa học Xã hội & Nhân văn',
    height: '172 cm',
    photos: ['img/duc_1.jpg', 'img/duc_2.jpg', 'img/duc_3.jpg'],
    isNew: false,
    status: 'active',
  },
  {
    id: 11,
    name: 'Yến',
    age: 24,
    location: 'Hà Nội, 5 km',
    bio: 'Yêu mèo 🐱 và thích làm gốm. Đang học thạc sĩ tâm lý học.',
    interests: ['🐱 Mèo', '🎨 Làm gốm', '🧠 Tâm lý học'],
    job: 'Giáo viên mầm non',
    education: 'ĐH Sư phạm Hà Nội',
    height: '158 cm',
    emoji: '🌙',
    gradient: 'linear-gradient(135deg, #a18cd1, #fbc2eb)',
    photos: ['img/yen_1.jpg', 'img/yen_2.jpg', 'img/yen_3.jpg'],
    isNew: true, status: 'active'
  },
  {
    id: 12,
    name: 'Sơn',
    age: 27,
    location: 'TP.HCM, 2 km',
    bio: 'Phượt thủ xuyên Việt 🏍️. Thích những cung đường đèo và cà phê sáng.',
    interests: ['🏍️ Mô tô', '🏔️ Phượt', '☕ Cà phê'],
    job: 'Video Editor',
    education: 'RMIT University',
    height: '175 cm',
    gradient: 'linear-gradient(135deg, #ff9a9e, #fecfef)',
    photos: ['img/son_1.jpg', 'img/son_2.jpg', 'img/son_3.jpg'],
    isNew: false, status: 'active'
  },
  {
    id: 13,
    name: 'Ngọc',
    age: 22,
    location: 'Đà Nẵng, 10 km',
    bio: 'Học thiết kế thời trang. Thích đi bộ trên bãi biển lúc hoàng hôn 🌅.',
    interests: ['👗 Thời trang', '🎨 Vẽ', '🌊 Biển'],
    job: 'Designer',
    education: 'ĐH Kiến trúc Đà Nẵng',
    height: '165 cm',
    gradient: 'linear-gradient(135deg, #84fab0, #8fd3f4)',
    photos: ['img/ngoc_1.jpg', 'img/ngoc_2.jpg', 'img/ngoc_3.jpg'],
    isNew: true, status: 'active'
  },
  {
    id: 14,
    name: 'Hoàng',
    age: 31,
    location: 'Hà Nội, 1 km',
    bio: 'Tín đồ công nghệ 💻. Thích chơi game, nghe podcast và tập gym.',
    interests: ['🎮 Gaming', '🎧 Podcast', '💪 Gym'],
    job: 'Project Manager',
    education: 'ĐH Bách Khoa Hà Nội',
    height: '182 cm',
    gradient: 'linear-gradient(135deg, #fccb90, #d57eeb)',
    photos: ['img/hoang_1.jpg', 'img/hoang_2.jpg', 'img/hoang_3.jpg'],
    isNew: false, status: 'active'
  },
  {
    id: 15,
    name: 'Quỳnh',
    age: 26,
    location: 'TP.HCM, 6 km',
    bio: 'Chuyên gia Marketing. Thích pilates 🤸 và trà sữa.',
    interests: ['🤸 Pilates', '🧋 Trà sữa', '📱 Social Media'],
    job: 'Marketing Specialist',
    education: 'ĐH Kinh tế Luật',
    height: '160 cm',
    gradient: 'linear-gradient(135deg, #e0c3fc, #8ec5fc)',
    photos: ['img/quynh_1.jpg', 'img/quynh_2.jpg', 'img/quynh_3.jpg'],
    isNew: true, status: 'active'
  },
  {
    id: 16,
    name: 'Minh Anh', age: 23, location: 'Cần Thơ, 4 km', bio: 'Thích hát 🎤 và nấu ăn cho gia đình.',
    interests: ['🎤 Hát', '🍳 Nấu ăn'], job: 'Content Writer', emoji: '🌟',
    gradient: 'linear-gradient(135deg, #cfd9df, #e2ebf0)', isNew: true, status: 'active',
    photos: ['img/minhanh.jpg']
  },
  {
    id: 17, name: 'Văn', age: 29, location: 'Hải Phòng, 3 km', bio: 'Thợ xăm hình 🎨. Yêu nghệ thuật đường phố.',
    interests: ['🎨 Tattoo', '🛹 Trượt ván'], job: 'Tattoo Artist', emoji: '💣',
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)', isNew: false, status: 'active',
    photos: ['img/van.jpg']
  },
  {
    id: 18, name: 'Phương', age: 25, location: 'Huế, 5 km', bio: 'Thích áo dài và thơ văn 📚. Rất dịu dàng.',
    interests: ['📚 Văn học', '👗 Áo dài'], job: 'Hướng dẫn viên', emoji: '🎐',
    gradient: 'linear-gradient(135deg, #cd9cf2, #f6f3ff)', isNew: true, status: 'active',
    photos: ['img/phuong.jpg']
  },
  {
    id: 19, name: 'Tú', age: 28, location: 'Bình Dương, 15 km', bio: 'Kỹ sư cơ khí. Đam mê câu cá 🎣.',
    interests: ['🎣 Câu cá', '🛠️ Kỹ thuật'], job: 'Mechanical Engineer', emoji: '⚙️',
    gradient: 'linear-gradient(135deg, #fdfcfb, #e2d1c3)', isNew: false, status: 'active',
    photos: ['img/tu.jpg']
  },
  {
    id: 20, name: 'Hương', age: 24, location: 'Vũng Tàu, 2 km', bio: 'Yêu biển và lướt ván 🏄‍♀️.',
    interests: ['🏄‍♀️ Lướt ván', '🌊 Biển'], job: 'Freelancer', emoji: '🍒',
    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)', isNew: true, status: 'active',
    photos: ['img/huong.jpg']
  }
];

const privateChats = [
  {
    id: 'c1',
    name: 'Linh',
    emoji: '',
    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
    photo: 'img/linh_1.jpg',
    online: true,
    lastMsg: 'Tuần này anh có rảnh không? 😊',
    time: '2 phút',
    unread: 2,
    messages: [
      { id: 'm1', from: 'them', text: 'Ủa ơ... match rồi nè 😄', time: '10:22' },
      { id: 'm2', from: 'me', text: 'Haha ừ, mình thấy profile bạn thú vị lắm!', time: '10:23' },
      { id: 'm3', from: 'them', text: 'Cảm ơn ạ 🥰 Anh ở Hà Nội hả?', time: '10:24' },
      { id: 'm4', from: 'me', text: 'Ừ đúng rồi, gần Hồ Gươm. Bạn sống quận nào?', time: '10:25' },
      { id: 'm5', from: 'them', text: 'Mình ở Cầu Giấy, gần trường thôi ạ 😊', time: '10:26' },
      { id: 'm6', from: 'me', text: 'Vậy là gần nhau ha! Bạn hay đi cà phê ở đâu không?', time: '10:28' },
      { id: 'm7', from: 'them', text: 'Mình hay ra The Coffee House gần nhà. Anh thích cà phê không?', time: '10:30' },
      { id: 'm8', from: 'me', text: 'Thích chứ, mình uống sáng nào cũng uống 😂', time: '10:31' },
      { id: 'm9', from: 'them', text: 'Tuần này anh có rảnh không? 😊', time: '14:05' },
    ],
  },
  {
    id: 'c2',
    name: 'Hà',
    emoji: '',
    gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
    photo: 'img/ha_1.jpg',
    online: true,
    lastMsg: 'ảnh đó đẹp quá anh ơi!',
    time: '15 phút',
    unread: 0,
    messages: [
      { id: 'm1', from: 'them', text: 'Hi hi, mình vừa match nè 🎉', time: 'Hôm qua' },
      { id: 'm2', from: 'me', text: 'Chào Hà! Profile của bạn trông rất vui tính 😄', time: 'Hôm qua' },
      { id: 'm3', from: 'them', text: 'Hehe, anh đã đi Đà Nẵng chưa?', time: 'Hôm qua' },
      { id: 'm4', from: 'me', text: 'Rồi, đi 2 lần rồi. Đà Nẵng đẹp lắm, nhất là Mỹ Khê', time: 'Hôm qua' },
      { id: 'm5', from: 'them', text: 'Mình mới chụp được ảnh sunset ở Non Nước cực đẹp nè!', time: '09:10' },
      { id: 'm6', from: 'me', text: 'Oooh share cho mình xem với! 😍', time: '09:12' },
      { id: 'm7', from: 'them', text: '🌅 [Hình ảnh]', time: '09:14', isImage: true },
      { id: 'm8', from: 'me', text: 'ảnh đó đẹp quá anh ơi!', time: '09:15' },
    ],
  },
  {
    id: 'c3',
    name: 'Mai',
    emoji: '',
    gradient: 'linear-gradient(135deg, #fddb92, #d1fdff)',
    photo: 'img/mai_1.jpg',
    online: false,
    lastMsg: 'Bánh của mình làm xong rồi nè!',
    time: '1 giờ',
    unread: 3,
    messages: [
      { id: 'm1', from: 'me', text: 'Chào Mai! Bạn làm bánh loại gì vậy?', time: '08:00' },
      { id: 'm2', from: 'them', text: 'Mình thích làm bánh mì mật ong và bánh cupcake 🧁', time: '08:05' },
      { id: 'm3', from: 'me', text: 'Wow nghe ngon ghê! Có thể làm cho mình thử không? 😂', time: '08:06' },
      { id: 'm4', from: 'them', text: 'Haha nếu anh lên Huế thì mình làm cho ăn thử 😄', time: '08:10' },
      { id: 'm5', from: 'me', text: 'Nghe như là invitation đó nha 👀', time: '08:11' },
      { id: 'm6', from: 'them', text: 'Bánh của mình làm xong rồi nè!', time: '08:30' },
    ],
  },
  {
    id: 'c4',
    name: 'Trang',
    emoji: '',
    gradient: 'linear-gradient(135deg, #f7971e, #ffd200)',
    photo: 'img/trang_1.jpg',
    online: true,
    lastMsg: 'Mình có show diễn tối thứ 7 này!',
    time: '3 giờ',
    unread: 0,
    messages: [
      { id: 'm1', from: 'them', text: 'Chào 👋 nhìn hồ sơ bạn thú vị thật', time: 'Hôm qua' },
      { id: 'm2', from: 'me', text: 'Cảm ơn! Bạn là dancer chuyên nghiệp à? Ngưỡng mộ quá 😲', time: 'Hôm qua' },
      { id: 'm3', from: 'them', text: 'Ừ mình theo đuổi đam mê từ năm 16 tuổi 💃', time: 'Hôm qua' },
      { id: 'm4', from: 'me', text: 'Khi nào có show mình muốn đi xem!', time: 'Hôm qua' },
      { id: 'm5', from: 'them', text: 'Mình có show diễn tối thứ 7 này!', time: '07:30' },
    ],
  },
  {
    id: 'c5',
    name: 'An',
    emoji: '',
    gradient: 'linear-gradient(135deg, #fa709a, #fee140)',
    photo: 'img/an_1.jpg',
    online: false,
    lastMsg: 'hahhaha ừ mình lạc đường thật 😂',
    time: 'Hôm qua',
    unread: 0,
    messages: [
      { id: 'm1', from: 'me', text: 'Chào An! Bạn đang ở năm mấy rồi?', time: 'Hôm qua 16:00' },
      { id: 'm2', from: 'them', text: 'Năm 4 rồi anh ơi, sắp ra trường 😅', time: 'Hôm qua 16:05' },
      { id: 'm3', from: 'me', text: 'Ủa tưởng bạn còn trẻ lắm, sinh viên năm mấy mà già thế 😄', time: 'Hôm qua 16:06' },
      { id: 'm4', from: 'them', text: 'Haha mình mà già? Tuổi 22 mà 😤', time: 'Hôm qua 16:08' },
      { id: 'm5', from: 'me', text: 'Oke oke xin lỗi 🙈 Cần Thơ có gì vui không bạn?', time: 'Hôm qua 16:10' },
      { id: 'm6', from: 'them', text: 'Có bánh cống, hủ tiếu 🍜 bla bla... mình chưa kịp khám phá hết vì hay bị lạc đường 😂', time: 'Hôm qua 16:15' },
      { id: 'm7', from: 'me', text: 'Lạc đường? Con gái Cần Thơ mà lạc đường ở Cần Thơ? 😲', time: 'Hôm qua 16:16' },
      { id: 'm8', from: 'them', text: 'hahhaha ừ mình lạc đường thật 😂', time: 'Hôm qua 16:18' },
    ],
  },
];

const groupChats = [
  {
    id: 'g1',
    name: '🔥 Heartbeat Hà Nội',
    emoji: '🔥',
    gradient: 'linear-gradient(135deg, #fd5068, #a855f7)',
    photo: 'img/hung_1.jpg',
    isGroup: true,
    members: 248,
    lastMsg: 'Minh: Có ai rảnh cuối tuần không?',
    time: '5 phút',
    unread: 12,
    messages: [
      { id: 'm1', from: 'them', sender: 'Linh', sEmoji: '🌸', sGrad: 'linear-gradient(135deg,#f093fb,#f5576c)', text: 'Chào mọi người! Hà Nội tối nay trời đẹp quá 🌙', time: '19:00' },
      { id: 'm2', from: 'them', sender: 'Tuấn', sEmoji: '🎵', sGrad: 'linear-gradient(135deg,#667eea,#764ba2)', text: 'Ừ đúng rồi, thích hợp đi dạo Hồ Tây 😄', time: '19:03' },
      { id: 'm3', from: 'me', text: 'Có ai đi không thì mình join 😁', time: '19:05' },
      { id: 'm4', from: 'them', sender: 'Hùng', sEmoji: '🚀', sGrad: 'linear-gradient(135deg,#0f3460,#533483)', text: 'Mình bận xíu, mấy giờ đi?', time: '19:06' },
      { id: 'm5', from: 'them', sender: 'Linh', sEmoji: '🌸', sGrad: 'linear-gradient(135deg,#f093fb,#f5576c)', text: 'Khoảng 8h tối nhé mọi người!', time: '19:08' },
      { id: 'm6', from: 'me', text: '👍', time: '19:09' },
      { id: 'm7', from: 'them', sender: 'Khoa', sEmoji: '🏗️', sGrad: 'linear-gradient(135deg,#a18cd1,#fbc2eb)', text: 'Mình cũng tham gia! Gặp ở cổng chính Hồ Tây không?', time: '19:12' },
      { id: 'm8', from: 'them', sender: 'Minh', sEmoji: '⚡', sGrad: 'linear-gradient(135deg,#4facfe,#00f2fe)', text: 'Có ai rảnh cuối tuần không?', time: '20:30' },
    ],
  },
  {
    id: 'g2',
    name: '🍜 Hội ăn uống Sài Gòn',
    emoji: '🍜',
    gradient: 'linear-gradient(135deg, #f7971e, #ffd200)',
    isGroup: true,
    members: 156,
    lastMsg: 'An: Có chỗ hủ tiếu ngon quá mọi người!',
    time: '30 phút',
    unread: 5,
    messages: [
      { id: 'm1', from: 'them', sender: 'Trang', sEmoji: '💎', sGrad: 'linear-gradient(135deg,#f7971e,#ffd200)', text: 'Tối nay ai đi Bến Thành ăn không?', time: '18:00' },
      { id: 'm2', from: 'them', sender: 'Hà', sEmoji: '🌺', sGrad: 'linear-gradient(135deg,#43e97b,#38f9d7)', text: 'Mình đang Đà Nẵng nên không đi được 😢', time: '18:05' },
      { id: 'm3', from: 'me', text: 'Mình đang ở Q1, đi nha!', time: '18:06' },
      { id: 'm4', from: 'them', sender: 'An', sEmoji: '🦋', sGrad: 'linear-gradient(135deg,#fa709a,#fee140)', text: 'Có chỗ hủ tiếu ngon quá mọi người!', time: '18:40' },
    ],
  },
  {
    id: 'g3',
    name: '📸 Nhiếp ảnh & Du lịch',
    emoji: '📸',
    gradient: 'linear-gradient(135deg, #2c3e50, #4ca1af)',
    isGroup: true,
    members: 89,
    lastMsg: 'Đức: Chia sẻ ảnh Hội An tuần trước',
    time: '2 giờ',
    unread: 0,
    messages: [
      { id: 'm1', from: 'them', sender: 'Đức', sEmoji: '📷', sGrad: 'linear-gradient(135deg,#2c3e50,#4ca1af)', text: 'Hội An lúc hoàng hôn đẹp không tả được 🌅', time: '14:00' },
      { id: 'm2', from: 'me', text: 'Ảnh của bạn lúc nào cũng đỉnh! Dùng máy gì vậy?', time: '14:10' },
      { id: 'm3', from: 'them', sender: 'Đức', sEmoji: '📷', sGrad: 'linear-gradient(135deg,#2c3e50,#4ca1af)', text: 'Sony A7IV nhưng quan trọng là ánh sáng 😊', time: '14:12' },
      { id: 'm4', from: 'them', sender: 'Đức', sEmoji: '📷', sGrad: 'linear-gradient(135deg,#2c3e50,#4ca1af)', text: 'Chia sẻ ảnh Hội An tuần trước 📸', time: '15:30', isImage: true },
    ],
  },
];

// =====================================================
//  STATE
// =====================================================
let currentCards = [...profiles];
let removedCards = [];
let currentView = 'swipe';
let activeChatId = null;
let activeChatType = 'private';
let isSwiping = false;
let isLoggedIn = false;
const myInterests = ['✈️ Du lịch', '☕ Cà phê', '📚 Đọc sách', '🎵 Âm nhạc', '🍜 Ẩm thực', '🏃 Chạy bộ'];

function normalizeInterest(interest) {
  return interest
    .replace(/[^\p{L}\p{N}\s]/gu, '')
    .toLowerCase()
    .trim();
}

function getCompatibility(profile) {
  const mine = myInterests.map(normalizeInterest);
  const theirs = (profile.interests || []).map(normalizeInterest);

  const shared = [];
  mine.forEach(myItem => {
    const hit = theirs.find(theirItem => theirItem.includes(myItem) || myItem.includes(theirItem));
    if (hit) shared.push(myItem);
  });

  const baseScore = 52;
  const sharedBoost = Math.min(shared.length * 11, 33);
  const randomFlavor = (profile.id * 7) % 12;
  const score = Math.min(97, baseScore + sharedBoost + randomFlavor);

  const reasons = [];
  if (shared.length > 0) {
    reasons.push(`Cùng sở thích: ${shared.slice(0, 2).join(', ')}`);
  }
  if (profile.location.includes('Hà Nội') || profile.location.includes('TP.HCM')) {
    reasons.push('Khoảng cách thuận tiện để gặp nhau');
  } else {
    reasons.push('Lối sống và năng lượng tích cực khá tương đồng');
  }
  if ((profile.bio || '').length > 100) {
    reasons.push('Hồ sơ chi tiết, dễ bắt đầu cuộc trò chuyện');
  }

  return {
    score,
    reasons: reasons.slice(0, 2)
  };
}

// =====================================================
//  DOM REFS
// =====================================================
const $cardStack = document.getElementById('card-stack');
const $emptyState = document.getElementById('empty-state');
const $hintLike = document.getElementById('hint-like');
const $hintNope = document.getElementById('hint-nope');
const $hintSuper = document.getElementById('hint-super');
const $matchesGrid = document.getElementById('matches-grid');
const $privateList = document.getElementById('private-list');
const $groupList = document.getElementById('group-list');
const $chatWindow = document.getElementById('chat-window');
const $messagesArea = document.getElementById('messages-area');
const $msgInput = document.getElementById('msg-input');
const $profileModal = document.getElementById('profile-modal');
const $matchModal = document.getElementById('match-modal');
const $toast = document.getElementById('toast');
const $heatmapGrid = document.getElementById('heatmap-grid');
const $heatmapHotspotList = document.getElementById('heatmap-hotspot-list');

const $sidebar = document.getElementById('sidebar');
const $sidebarOverlay = document.getElementById('sidebar-overlay');
const $mobileBottomNav = document.getElementById('mobile-bottom-nav');

// =====================================================
//  AUTHENTICATION LOGIC (NEW)
// =====================================================
function handleLogin(e) {
  if (e) e.preventDefault();
  
  const $user = document.getElementById('login-username');
  const $pass = document.getElementById('login-password');
  const user = $user.value.trim();
  const pass = $pass.value.trim();

  // Reset errors
  $user.classList.remove('error');
  $pass.classList.remove('error');

  if (!user || !pass) {
    if (!user) $user.classList.add('error');
    if (!pass) $pass.classList.add('error');
    showToast('⚠️ Vui lòng nhập đầy đủ tài khoản và mật khẩu!');
    return;
  }

  // Mock Authentication
  isLoggedIn = true;
  showToast('<i class="fa-solid fa-circle-check"></i> Đăng nhập thành công! Chào mừng bạn quay lại.', 'success');
  switchView('swipe');
}

function handleSocialLogin(provider) {
  let name = 'Google';
  if (provider === 'facebook') name = 'Facebook';
  if (provider === 'instagram') name = 'Instagram';
  
  isLoggedIn = true;
  showToast(`<i class="fa-solid fa-circle-check"></i> Đăng nhập bằng ${name} thành công!`, 'success');
  switchView('swipe');
}

function logout() {
  isLoggedIn = false;
  closeSidebar();
  showToast('<i class="fa-solid fa-circle-check"></i> Bạn đã đăng xuất thành công.', 'success');
  switchView('login');
}

// =====================================================
//  NAVIGATION
// =====================================================
// Consolidated Navigation Logic
function setupNavigation() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const viewId = btn.id.replace('nav-', '');
      if (viewId) {
        switchView(viewId);
      }
    });
  });

  // Mobile Bottom Nav Click Handlers
  document.querySelectorAll('#mobile-bottom-nav .nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view;
      if (view) {
        switchView(view);
      }
    });
  });

  // Login Form Submission
  document.getElementById('login-form')?.addEventListener('submit', handleLogin);

  // Clear errors on input
  const $userInput = document.getElementById('login-username');
  const $passInput = document.getElementById('login-password');
  [$userInput, $passInput].forEach(el => {
    el?.addEventListener('input', () => el.classList.remove('error'));
  });

  // Logout Button
  document.getElementById('btn-logout-sidebar')?.addEventListener('click', logout);
}

// --- SIDEBAR TOGGLE ---
function openSidebar() {
  $sidebar.classList.add('open');
  $sidebarOverlay.classList.remove('hidden');
  setTimeout(() => $sidebarOverlay.classList.add('active'), 10);
  document.body.style.overflow = 'hidden';

  // Hide floating bottom nav while sidebar is open on mobile
  if ($mobileBottomNav && window.innerWidth <= 660) {
    $mobileBottomNav.classList.add('hidden');
  }
}

function closeSidebar() {
  $sidebar.classList.remove('open');
  $sidebarOverlay.classList.remove('active');
  setTimeout(() => $sidebarOverlay.classList.add('hidden'), 220);
  document.body.style.overflow = '';

  // Restore bottom nav on mobile except when staying in chat view
  if ($mobileBottomNav && window.innerWidth <= 660 && currentView !== 'chat') {
    $mobileBottomNav.classList.remove('hidden');
  }
}

document.querySelectorAll('.sidebar-toggle').forEach(btn => {
  btn.addEventListener('click', openSidebar);
});

$sidebarOverlay.addEventListener('click', closeSidebar);


function switchView(viewId) {
  if (!viewId) return;
  
  // Hide Bottom Nav if Logged Out (on Login View)
  if (viewId === 'login') {
    if ($mobileBottomNav) $mobileBottomNav.classList.add('hidden');
    // Also hide sidebar for login view if open
    $sidebar?.classList.remove('open');
  } else if (!isLoggedIn && viewId !== 'login') {
    // Prevent unauthorized access in demo if needed, 
    // but for this task we'll just allow it after the login mock.
  }

  currentView = viewId;
  
  const targetId = 'view-' + viewId;
  const targetView = document.getElementById(targetId);
  
  if (!targetView) {
    console.warn(`View not found: ${targetId}`);
    return;
  }
  
  // Update visibility
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  targetView.classList.add('active');
  
  // Sync Nav Sidebar
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('nav-' + viewId)?.classList.add('active');
  
  // Sync Mobile Bottom Nav
  if ($mobileBottomNav) {
    document.querySelectorAll('#mobile-bottom-nav .nav-item').forEach(i => {
      i.classList.toggle('active', i.dataset.view === viewId);
    });

    const shouldHideBottomNav = window.innerWidth <= 660 && (viewId === 'chat' || viewId === 'checkout');
    $mobileBottomNav.classList.toggle('hidden', shouldHideBottomNav);
  }

  // Trigger Renders
  try {
    if (viewId === 'swipe') renderCards();
    if (viewId === 'feed') renderFeed();
    if (viewId === 'checkin') renderCheckinGrid();
    if (viewId === 'matches') { renderMatchesGrid(); renderSuggestions(); }
    if (viewId === 'chat') renderChatList('private');
    if (viewId === 'heatmap') renderHeatMap();
    if (viewId === 'schedule') renderCalendar();
    if (viewId === 'cart') renderCart('eat');
    if (viewId === 'admin') renderAdminDashboard();
  } catch (e) {
    console.error(`Error rendering view ${viewId}:`, e);
  }

  // Close sidebar on mobile
  if (window.innerWidth <= 660) {
    closeSidebar();
  }
}

// Setup Mobile Nav Click Handlers is now inside setupNavigation()


// =====================================================
//  CARD RENDERING
// =====================================================
function buildCard(profile, index) {
  const card = document.createElement('div');
  card.className = 'swipe-card';
  card.dataset.id = profile.id;
  card.dataset.photoIndex = 0;

  const photos = profile.photos && profile.photos.length > 0 ? profile.photos : [];
  const numPhotos = Math.min(photos.length, 3) || 1;

  // Header Dots
  let dotsHTML = '';
  for (let i = 0; i < numPhotos; i++) {
    dotsHTML += `<div class="photo-bar ${i === 0 ? 'active' : ''}"></div>`;
  }
  const dots = document.createElement('div');
  dots.className = 'card-photos-indicator';
  dots.innerHTML = dotsHTML;

  // Photo / Placeholder
  let photoHTML = '';
  if (photos.length > 0) {
    photos.slice(0, 3).forEach((src, idx) => {
      photoHTML += `
        <img class="card-photo ${idx === 0 ? 'active' : ''}" data-idx="${idx}" src="${src}" alt="${profile.name}" 
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="card-photo-placeholder" style="background:${profile.gradient};display:none"><span>${profile.emoji}</span></div>
      `;
    });
  } else {
    photoHTML = `<div class="card-photo-placeholder active" style="background:${profile.gradient}"><span>${profile.emoji}</span></div>`;
  }

  const tags = profile.interests.slice(0, 3).map(t => `<span class="card-tag">${t}</span>`).join('');
  const compat = getCompatibility(profile);

  card.innerHTML = `
    <div class="card-photos-container">${photoHTML}</div>
    <div class="card-nav-overlay">
      <div class="nav-zone left" data-dir="prev"></div>
      <div class="nav-zone right" data-dir="next"></div>
    </div>
    <div class="card-gradient"></div>
    ${dots.outerHTML}
    <button class="card-expand-btn" data-id="${profile.id}" title="Xem hồ sơ">
      <svg viewBox="0 0 24 24"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/></svg>
    </button>
    <div class="card-info">
      <div class="compat-badge">✨ ${compat.score}% hợp nhau</div>
      <div class="card-name-age">
        <span class="card-name">${profile.name}</span>
        <span class="card-age">${profile.age}</span>
      </div>
      <div class="card-location">
        <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
        ${profile.location}
      </div>
      <div class="compat-reason">${compat.reasons[0] || 'Tín hiệu tương hợp khá cao'}</div>
      <div class="card-tags">${tags}</div>
    </div>
  `;

  // Apply stacked depth transform
  if (index === 1) card.style.transform = 'scale(0.96) translateY(10px)';
  if (index === 2) card.style.transform = 'scale(0.92) translateY(20px)';

  // Expand button
  card.querySelector('.card-expand-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    openProfileModal(profile);
  });

  setupPhotoNavigation(card, numPhotos);
  setupDragSwipe(card, profile);
  return card;
}

function setupPhotoNavigation(card, numPhotos) {
  if (numPhotos <= 1) return;

  const zones = card.querySelectorAll('.nav-zone');
  zones.forEach(zone => {
    zone.addEventListener('click', (e) => {
      // If we're dragging, ignore the click
      if (card.dataset.isDragging === 'true') return;
      
      e.stopPropagation();
      const dir = zone.dataset.dir;
      let idx = parseInt(card.dataset.photoIndex);
      
      if (dir === 'next') {
        idx = (idx + 1) % numPhotos;
      } else {
        idx = (idx - 1 + numPhotos) % numPhotos;
      }
      
      updateCardPhoto(card, idx);
    });
  });
}

function updateCardPhoto(card, idx) {
  card.dataset.photoIndex = idx;
  
  // Update indicator
  const bars = card.querySelectorAll('.photo-bar');
  bars.forEach((bar, i) => bar.classList.toggle('active', i === idx));
  
  // Update photo visibility
  const photos = card.querySelectorAll('.card-photo, .card-photo-placeholder');
  photos.forEach((p, i) => {
    // Each pair of photo+placeholder counts as 1 slot
    const slotIdx = Math.floor(i / (card.querySelectorAll('.card-photo').length > 0 ? 2 : 1));
    p.classList.toggle('active', slotIdx === idx);
  });
}

function renderCards() {
  $cardStack.innerHTML = '';
  if (currentCards.length === 0) {
    $emptyState.classList.remove('hidden');
    return;
  }
  $emptyState.classList.add('hidden');
  const visible = currentCards.slice(0, 3);
  visible.forEach((profile, i) => {
    const card = buildCard(profile, i);
    $cardStack.appendChild(card);
  });
}

// =====================================================
//  DRAG & SWIPE
// =====================================================
function setupDragSwipe(card, profile) {
  let startX = 0, startY = 0, curX = 0, curY = 0;
  let isDragging = false;

  const onStart = (e) => {
    if (card !== $cardStack.firstElementChild) return;
    isDragging = true;
    card.dataset.isDragging = 'false'; // Track if a move actually happens
    const point = e.touches ? e.touches[0] : e;
    startX = point.clientX;
    startY = point.clientY;
    card.style.transition = 'none';
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onEnd);
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('touchend', onEnd);
  };

  const onMove = (e) => {
    if (!isDragging) return;
    if (e.cancelable) e.preventDefault();
    const point = e.touches ? e.touches[0] : e;
    curX = point.clientX - startX;
    curY = point.clientY - startY;

    if (Math.abs(curX) > 10 || Math.abs(curY) > 10) {
      card.dataset.isDragging = 'true';
    }

    const rotate = curX * 0.08;
    card.style.transform = `translate(${curX}px, ${curY}px) rotate(${rotate}deg)`;

    // Show hints
    const threshold = 60;
    if (curX > threshold) {
      $hintLike.style.opacity = Math.min((curX - threshold) / 80, 1);
      $hintNope.style.opacity = 0;
      $hintSuper.style.opacity = 0;
    } else if (curX < -threshold) {
      $hintNope.style.opacity = Math.min((-curX - threshold) / 80, 1);
      $hintLike.style.opacity = 0;
      $hintSuper.style.opacity = 0;
    } else if (curY < -threshold) {
      $hintSuper.style.opacity = Math.min((-curY - threshold) / 80, 1);
      $hintLike.style.opacity = 0;
      $hintNope.style.opacity = 0;
    } else {
      $hintLike.style.opacity = 0;
      $hintNope.style.opacity = 0;
      $hintSuper.style.opacity = 0;
    }
  };

  const onEnd = () => {
    if (!isDragging) return;
    isDragging = false;
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseup', onEnd);
    document.removeEventListener('touchmove', onMove);
    document.removeEventListener('touchend', onEnd);

    $hintLike.style.opacity = 0;
    $hintNope.style.opacity = 0;
    $hintSuper.style.opacity = 0;

    const swipeThreshold = 100;
    if (curX > swipeThreshold) {
      doSwipe(card, profile, 'like');
    } else if (curX < -swipeThreshold) {
      doSwipe(card, profile, 'nope');
    } else if (curY < -swipeThreshold) {
      doSwipe(card, profile, 'super');
    } else {
      card.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
      card.style.transform = '';
    }
    curX = 0;
    curY = 0;
  };

  card.addEventListener('mousedown', onStart);
  card.addEventListener('touchstart', onStart, { passive: true });
}

function doSwipe(card, profile, action) {
  if (isSwiping) return;
  isSwiping = true;

  removedCards.unshift(profile);
  currentCards = currentCards.filter(p => p.id !== profile.id);

  // Disable card transition for animation
  const flyClass = action === 'like' ? 'card-fly-right' : action === 'nope' ? 'card-fly-left' : 'card-fly-up';
  card.style.transition = 'none';
  card.classList.add(flyClass);

  card.addEventListener('animationend', () => {
    card.remove();
    renderCards();
    isSwiping = false;
  }, { once: true });

  // Actions
  if (action === 'like') {
    // Always show match for demo
    setTimeout(() => showMatchModal(profile), 600);
  } else if (action === 'super') {
    showToast(`⭐ Super Like gửi đến ${profile.name}!`);
  } else {
    showToast(`❌ Bỏ qua ${profile.name}`);
  }
}

// =====================================================
//  ACTION BUTTONS
// =====================================================
document.getElementById('btn-like').addEventListener('click', () => {
  const top = $cardStack.firstElementChild;
  if (!top || isSwiping) return;
  const id = parseInt(top.dataset.id);
  const profile = currentCards.find(p => p.id === id);
  if (profile) doSwipe(top, profile, 'like');
});

document.getElementById('btn-nope').addEventListener('click', () => {
  const top = $cardStack.firstElementChild;
  if (!top || isSwiping) return;
  const id = parseInt(top.dataset.id);
  const profile = currentCards.find(p => p.id === id);
  if (profile) doSwipe(top, profile, 'nope');
});

document.getElementById('btn-super').addEventListener('click', () => {
  const top = $cardStack.firstElementChild;
  if (!top || isSwiping) return;
  const id = parseInt(top.dataset.id);
  const profile = currentCards.find(p => p.id === id);
  if (profile) doSwipe(top, profile, 'super');
});

document.getElementById('btn-rewind').addEventListener('click', () => {
  if (removedCards.length === 0) {
    showToast('Không có hồ sơ để quay lại!');
    return;
  }
  const last = removedCards.shift();
  currentCards.unshift(last);
  renderCards();
  showToast(`↩️ Quay lại hồ sơ ${last.name}`);
});

document.getElementById('btn-reset').addEventListener('click', () => {
  currentCards = [...profiles];
  removedCards = [];
  renderCards();
});

// =====================================================
//  PROFILE MODAL
// =====================================================
function openProfileModal(profile) {
  const compat = getCompatibility(profile);
  document.getElementById('detail-name').textContent = profile.name;
  document.getElementById('detail-age').textContent = profile.age;
  document.getElementById('detail-location-text').textContent = profile.location;
  document.getElementById('detail-bio').textContent = profile.bio;
  document.getElementById('detail-compatibility').innerHTML = `
    <div class="detail-compat-score">✨ Độ tương hợp: ${compat.score}%</div>
    <div class="detail-compat-reasons">${compat.reasons.map(r => `• ${r}`).join('<br>')}</div>
  `;
  document.getElementById('detail-job').textContent = profile.job;
  document.getElementById('detail-edu').textContent = profile.education;
  document.getElementById('detail-height').textContent = profile.height;
  document.getElementById('detail-zodiac').textContent = profile.zodiac;

  // Interests
  const $interests = document.getElementById('detail-interests');
  $interests.innerHTML = profile.interests.map(i => `<span class="interest-tag">${i}</span>`).join('');

  // Photo
  const $photos = document.getElementById('profile-photos');
  if (profile.photos && profile.photos.length > 0) {
    $photos.innerHTML = `<img src="${profile.photos[0]}" alt="${profile.name}" style="width:100%;height:100%;object-fit:cover" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="photo-placeholder" style="background:${profile.gradient};display:none"><span>${profile.emoji}</span></div>`;
  } else {
    $photos.innerHTML = `<div class="photo-placeholder" style="background:${profile.gradient}"><span style="font-size:6rem">${profile.emoji}</span></div>`;
  }

  // Modal action buttons
  document.getElementById('modal-like').onclick = () => {
    closeProfileModal();
    const cardEl = $cardStack.querySelector(`[data-id="${profile.id}"]`);
    if (cardEl) doSwipe(cardEl, profile, 'like');
    else { showMatchModal(profile); currentCards = currentCards.filter(p => p.id !== profile.id); }
  };
  document.getElementById('modal-nope').onclick = () => {
    closeProfileModal();
    const cardEl = $cardStack.querySelector(`[data-id="${profile.id}"]`);
    if (cardEl) doSwipe(cardEl, profile, 'nope');
    else { showToast(`❌ Bỏ qua ${profile.name}`); currentCards = currentCards.filter(p => p.id !== profile.id); }
  };
  document.getElementById('modal-super').onclick = () => {
    closeProfileModal();
    const cardEl = $cardStack.querySelector(`[data-id="${profile.id}"]`);
    if (cardEl) doSwipe(cardEl, profile, 'super');
    else { showToast(`⭐ Super Like gửi đến ${profile.name}!`); currentCards = currentCards.filter(p => p.id !== profile.id); }
  };

  $profileModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeProfileModal() {
  $profileModal.classList.add('hidden');
  document.body.style.overflow = '';
}

document.getElementById('btn-close-profile').addEventListener('click', closeProfileModal);
$profileModal.addEventListener('click', (e) => { if (e.target === $profileModal) closeProfileModal(); });

// =====================================================
//  MATCH MODAL
// =====================================================
function showMatchModal(profile) {
  document.getElementById('match-name').textContent = profile.name;
  const $avatar = document.getElementById('match-partner-avatar');
  $avatar.style.background = profile.gradient;
  $avatar.innerHTML = `<span>${profile.emoji}</span>`;
  $matchModal.classList.remove('hidden');
}

document.getElementById('btn-keep-swiping').addEventListener('click', () => {
  $matchModal.classList.add('hidden');
});

document.getElementById('btn-send-message').addEventListener('click', () => {
  $matchModal.classList.add('hidden');
  switchView('chat');
  // Open first private chat
  openChat(privateChats[0], 'private');
});

// =====================================================
//  MATCHES GRID + SUGGESTIONS
// =====================================================
function renderMatchesGrid(filter = '') {
  $matchesGrid.innerHTML = '';
  // Show first 8 as "matches"
  const matchedProfiles = profiles.slice(0, 8); 
  
  const filtered = matchedProfiles.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()));

  if (filtered.length === 0) {
    $matchesGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
        <p>Không tìm thấy kết nối nào phù hợp.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'match-card';
    card.innerHTML = `
      ${p.photos && p.photos.length > 0
        ? `<img src="${p.photos[0]}" alt="${p.name}" onerror="this.src='https://ui-avatars.com/api/?name=${p.name}&background=random'">`
        : `<div style="background:${p.gradient};width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:3rem"><span>${p.emoji}</span></div>`}
      <div class="match-card-overlay">
        <h4>${p.name}, ${p.age}</h4>
        <p>${p.job}</p>
      </div>
      ${p.isNew ? '<div class="match-new-badge" style="position:absolute;top:12px;left:12px; background:var(--apple-pink); color:white; padding:4px 8px; border-radius:10px; font-size:0.7rem; font-weight:700;">Mới</div>' : ''}
    `;
    card.addEventListener('click', () => openProfileModal(p));
    $matchesGrid.appendChild(card);
  });

  renderSuggestions();
}

function renderSuggestions() {
  const $scroll = document.getElementById('suggest-scroll');
  if (!$scroll) return;
  $scroll.innerHTML = '';
  
  // Use next slice for suggestions
  profiles.slice(8, 20).forEach(p => {
    const card = document.createElement('div');
    card.className = 'match-card suggest-card'; // Reuse match-card style
    card.innerHTML = `
      ${p.photos && p.photos.length > 0
        ? `<img src="${p.photos[0]}" alt="${p.name}" onerror="this.src='https://ui-avatars.com/api/?name=${p.name}&background=random'">`
        : `<div style="background:${p.gradient};width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:3rem"><span>${p.emoji}</span></div>`}
      <div class="match-card-overlay">
        <h4>${p.name}, ${p.age}</h4>
        <p>📍 ${p.location.split(',')[1]?.trim() || p.location}</p>
      </div>
    `;
    card.addEventListener('click', () => openProfileModal(p));
    $scroll.appendChild(card);
  });
}

// Search Logic for Matches
document.getElementById('matches-search-input')?.addEventListener('input', (e) => {
  renderMatchesGrid(e.target.value);
});

// =====================================================
//  MAP HEAT DATING
// =====================================================
function getAreaLabel(locationText = '') {
  return locationText.split(',')[0]?.trim() || 'Khu vực khác';
}

function getHeatLevel(count) {
  if (count >= 3) return 'high';
  if (count >= 2) return 'medium';
  return 'low';
}

function renderHeatMap() {
  if (!$heatmapGrid || !$heatmapHotspotList) return;

  const areaCount = {};
  profiles.forEach(p => {
    const area = getAreaLabel(p.location);
    areaCount[area] = (areaCount[area] || 0) + 1;
  });

  const hotspots = Object.entries(areaCount)
    .map(([area, count]) => ({
      area,
      count,
      score: Math.min(99, 65 + count * 8 + (area.length % 10))
    }))
    .sort((a, b) => b.count - a.count);

  // Render hotspot side list with vibrancy bars
  $heatmapHotspotList.innerHTML = hotspots.slice(0, 5).map((h, idx) => `
    <div class="hotspot-item">
      <div class="hotspot-header">
        <div class="hotspot-title">${h.area}</div>
        <div class="hotspot-badge">Hot now</div>
      </div>
      <div class="vibrancy-bar-container">
        <div class="vibrancy-bar" style="width: ${h.score}%"></div>
      </div>
      <div class="hotspot-meta">
        <span><i class="fa-solid fa-fire"></i> ${h.score}%</span>
        <span><i class="fa-solid fa-users"></i> ${h.count} active</span>
      </div>
    </div>
  `).join('');

  // Populate Live Feed (Desktop Only)
  const $liveFeed = document.querySelector('.live-activity-feed');
  if ($liveFeed) {
    const logTemplates = [
      "DETECT: User match in {area}",
      "SIGNAL: Peak activity in {area}",
      "ACCESS: New node active in {area}",
      "SYNC: Area {area} vibrancy calibrated",
      "MONITOR: Presence surge detected in {area}"
    ];
    
    // Initial logs
    $liveFeed.innerHTML = Array.from({length: 4}).map(() => {
        const area = hotspots[Math.floor(Math.random() * hotspots.length)]?.area || "Hà Nội";
        const template = logTemplates[Math.floor(Math.random() * logTemplates.length)];
        return `<div class="live-log">${template.replace('{area}', area)}</div>`;
    }).join('');

    // Dynamic rotation if not already set
    if (!window._heatmapInterval) {
        window._heatmapInterval = setInterval(() => {
            if (currentView !== 'heatmap') return;
            const area = hotspots[Math.floor(Math.random() * hotspots.length)]?.area || "Hà Nội";
            const template = logTemplates[Math.floor(Math.random() * logTemplates.length)];
            const newLog = document.createElement('div');
            newLog.className = 'live-log';
            newLog.style.opacity = '0';
            newLog.innerText = template.replace('{area}', area);
            $liveFeed.prepend(newLog);
            setTimeout(() => newLog.style.opacity = '1', 50);
            if ($liveFeed.children.length > 5) $liveFeed.lastElementChild.remove();
        }, 4000);
    }
  }

  // Create heat cells (32 cells), distributed by hotspots
  const cells = [];
  const hotspotPool = hotspots.length > 0 ? hotspots : [{ area: 'Khu vực khác', count: 1, score: 50 }];

  // Define some landmarks for atmosphere
  const landmarks = {
    4: 'Hồ Tây',
    11: 'Phố Cổ',
    18: 'Cầu Giấy',
    27: 'Ba Đình',
    9: 'Hoàn Kiếm',
    22: 'Tây Hồ'
  };

  for (let i = 0; i < 32; i++) {
    const idx = i + 1;
    const ref = hotspotPool[i % hotspotPool.length];
    const variance = ((i * 13) % 3) - 1;
    const count = Math.max(1, ref.count + variance);
    cells.push({
      area: ref.area,
      count,
      level: getHeatLevel(count),
      landmark: landmarks[idx] || null
    });
  }

  $heatmapGrid.innerHTML = cells.map((cell, idx) => `
    <button class="heat-cell ${cell.level}" data-area="${cell.area}" data-count="${cell.count}">
      ${cell.landmark ? `<span class="landmark-name">${cell.landmark}</span>` : ''}
      <span class="count">${cell.count}</span>
    </button>
  `).join('');

  $heatmapGrid.querySelectorAll('.heat-cell').forEach(cell => {
    cell.addEventListener('click', () => {
      const area = cell.dataset.area;
      const count = cell.dataset.count;
      showToast(`📍 <b>${area}</b>: Khu vực đang có <b>${count}</b> người hoạt động. Hãy bắt đầu kết nối ngay!`);
    });
  });
}

// =====================================================
//  CHAT
// =====================================================
function renderChatList(type) {
  const list = type === 'private' ? privateChats : groupChats;
  const $el = type === 'private' ? $privateList : $groupList;
  $el.innerHTML = '';

  list.forEach(conv => {
    const item = document.createElement('div');
    item.className = 'conv-item' + (conv.unread > 0 ? ' unread' : '');
    item.dataset.id = conv.id;

    const onlineDot = (!conv.isGroup && conv.online) ? '<div class="conv-online-dot"></div>' : '';
    const avatarClass = conv.isGroup ? 'conv-avatar group-avatar' : 'conv-avatar';

    item.innerHTML = `
      <div class="${avatarClass}" style="${conv.photo ? `background: url(${conv.photo}) center/cover no-repeat;` : `background:${conv.gradient}`}">
        ${conv.photo ? '' : conv.emoji}
        ${onlineDot}
      </div>
      <div class="conv-body">
        <div class="conv-name">${conv.name}</div>
        <div class="conv-preview">${conv.lastMsg}</div>
      </div>
      <div class="conv-meta">
        <span class="conv-time">${conv.time}</span>
        ${conv.unread > 0 ? `<span class="conv-unread-count">${conv.unread}</span>` : ''}
      </div>
    `;
    item.addEventListener('click', () => openChat(conv, type));
    $el.appendChild(item);
  });
}

function openChat(conv, type) {
  activeChatId = conv.id;
  activeChatType = type;

  // Mark as read
  conv.unread = 0;
  renderChatList(type);

  // Set header
  const $avatar = document.getElementById('chat-partner-avatar');
  if (conv.photo) {
    $avatar.style.background = `url(${conv.photo}) center/cover no-repeat`;
    $avatar.textContent = '';
  } else {
    $avatar.style.background = conv.gradient;
    $avatar.textContent = conv.emoji;
  }
  document.getElementById('chat-partner-name').textContent = conv.name;
  document.getElementById('chat-partner-status').textContent = conv.isGroup
    ? `${conv.members} thành viên`
    : conv.online ? 'Đang hoạt động' : 'Hoạt động 1 giờ trước';

  // Highlight active
  document.querySelectorAll('.conv-item').forEach(el => el.classList.remove('active'));
  document.querySelector(`.conv-item[data-id="${conv.id}"]`)?.classList.add('active');

  // Render messages
  renderMessages(conv.messages, conv.isGroup);

  // Show window
  $chatWindow.classList.remove('hidden');
  $chatWindow.classList.add('chat-open');
}

function renderMessages(messages, isGroup) {
  $messagesArea.innerHTML = '';

  let lastDate = null;

  messages.forEach((msg, idx) => {
    // Date divider
    const dateStr = msg.time.includes(':') && !msg.time.includes('Hôm qua') ? 'Hôm nay' : msg.time.split(' ')[0];
    if (dateStr !== lastDate) {
      lastDate = dateStr;
      const div = document.createElement('div');
      div.className = 'msg-date-divider';
      div.innerHTML = `<span class="msg-date-text">${dateStr === 'Hôm nay' ? 'Hôm nay' : msg.time.includes('Hôm qua') ? 'Hôm qua' : dateStr}</span>`;
      $messagesArea.appendChild(div);
    }

    const group = document.createElement('div');
    group.className = 'msg-group ' + (msg.from === 'me' ? 'outgoing' : 'incoming');

    // Group sender name (for group chats)
    if (msg.from !== 'me' && isGroup && msg.sender) {
      const senderEl = document.createElement('div');
      senderEl.className = 'msg-sender-name';
      senderEl.textContent = msg.sender;
      group.appendChild(senderEl);
    }

    const wrap = document.createElement('div');
    wrap.className = 'msg-bubble-wrap';

    // Mini avatar for received messages
    if (msg.from !== 'me') {
      const mini = document.createElement('div');
      mini.className = 'msg-mini-avatar';
      if (msg.sPhoto) {
        mini.style.background = `url(${msg.sPhoto}) center/cover no-repeat`;
        mini.textContent = '';
      } else {
        mini.style.background = msg.sGrad || 'linear-gradient(135deg,#f093fb,#f5576c)';
        mini.textContent = msg.sEmoji || '🙂';
      }
      wrap.appendChild(mini);
    }

    const bubble = document.createElement('div');
    bubble.className = 'msg-bubble';
    bubble.textContent = msg.isImage ? '📷 Hình ảnh' : msg.text;
    if (msg.isImage) bubble.style.fontStyle = 'italic';

    const timeEl = document.createElement('div');
    timeEl.className = 'msg-time';
    timeEl.textContent = msg.time.includes(':') ? msg.time.split(':').slice(0,2).join(':') : msg.time;

    wrap.appendChild(bubble);
    group.appendChild(wrap);
    group.appendChild(timeEl);
    $messagesArea.appendChild(group);
  });


  // Scroll to bottom
  $messagesArea.scrollTop = $messagesArea.scrollHeight;
}

// Send message
function sendMessage() {
  const text = $msgInput.value.trim();
  if (!text || !activeChatId) return;

  const list = activeChatType === 'private' ? privateChats : groupChats;
  const conv = list.find(c => c.id === activeChatId);
  if (!conv) return;

  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;

  const msg = { id: 'm' + Date.now(), from: 'me', text, time: timeStr };
  conv.messages.push(msg);
  conv.lastMsg = text;
  conv.time = 'Vừa xong';

  renderMessages(conv.messages, conv.isGroup);
  renderChatList(activeChatType);
  $msgInput.value = '';

  // Simulate reply after 1-2s
  const replyTime = 1000 + Math.random() * 1500;
  setTimeout(() => {
    const replies = [
      'Hihi, ừ 😊', 'Thật ra mình cũng đang nghĩ về điều đó!', 'Nghe hay đấy!',
      'Anh/chị nói đúng 😄', 'Haha vui thật!', 'Oke! 👍', 'Mình cũng nghĩ vậy!',
      'Thú vị thật, kể tiếp đi!', '😂 Trời ơi!', 'Cảm ơn nha 🥰',
    ];
    const reply = replies[Math.floor(Math.random() * replies.length)];
    const replyMsg = { 
      id: 'm' + Date.now(), from: 'them', text: reply, time: timeStr, 
      sEmoji: conv.emoji, sGrad: conv.gradient, sPhoto: conv.photo 
    };
    conv.messages.push(replyMsg);
    conv.lastMsg = reply;
    renderMessages(conv.messages, conv.isGroup);
    renderChatList(activeChatType);
  }, replyTime);
}

document.getElementById('btn-send').addEventListener('click', sendMessage);
$msgInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendMessage(); });

// Back button (mobile)
document.getElementById('btn-back-chat').addEventListener('click', () => {
  $chatWindow.classList.add('hidden');
  $chatWindow.classList.remove('chat-open');
  if ($mobileBottomNav && window.innerWidth <= 660) {
    $mobileBottomNav.classList.remove('hidden');
  }
});

// Chat tabs
document.querySelectorAll('.chat-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.chat-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const active = tab.dataset.tab;
    $privateList.classList.toggle('hidden', active !== 'private');
    $groupList.classList.toggle('hidden', active !== 'group');
  });
});

// =====================================================
//  TOAST
// =====================================================
let toastTimer = null;
function showToast(msg, type = '') {
  $toast.innerHTML = msg;
  $toast.classList.remove('hidden', 'success');
  if (type) $toast.classList.add(type);
  
  $toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    $toast.classList.remove('show');
    setTimeout(() => $toast.classList.add('hidden'), 300);
  }, 2500);
}

// =====================================================
//  ADMIN / BROKER LOGIC
// =====================================================
function renderAdminDashboard() {
  const $total = document.getElementById('admin-total-users');
  const $active = document.getElementById('admin-active-users');
  const $locked = document.getElementById('admin-locked-users');
  const $list = document.getElementById('admin-user-list');
  const $selectA = document.getElementById('match-user-a');
  const $selectB = document.getElementById('match-user-b');

  if (!$total) return;

  // Stats
  $total.textContent = profiles.length;
  $active.textContent = profiles.filter(p => p.status === 'active').length;
  $locked.textContent = profiles.filter(p => p.status === 'locked').length;

  // List Rendering (Cards for both Desktop/Mobile)
  $list.innerHTML = '';
  profiles.forEach(p => {
    const card = document.createElement('div');
    card.className = 'admin-user-card';
    card.innerHTML = `
      <div class="user-info">
        <div class="user-avatar-mini" style="background: url(${p.photos[0]}) center/cover no-repeat"></div>
        <div class="user-details">
          <span class="user-name">${p.name}</span>
          <span class="user-job-mini">${p.job}</span>
        </div>
      </div>
      <div class="user-status-wrapper">
        <span class="status-badge ${p.status}">${p.status === 'active' ? 'Hoạt động' : 'Đã khóa'}</span>
      </div>
      <div class="user-actions">
        <button class="btn-action-sm ${p.status === 'active' ? 'lock' : 'unlock'}" onclick="handleToggleStatus(${p.id})" title="${p.status === 'active' ? 'Khóa' : 'Kích hoạt'}">
          ${p.status === 'active' ? 'Khóa' : 'Kích hoạt'}
        </button>
      </div>
    `;
    $list.appendChild(card);
  });

  // Manual Match Selects
  const options = profiles
    .filter(p => p.status === 'active')
    .map(p => `<option value="${p.id}">${p.name} (#${p.id})</option>`)
    .join('');
  
  $selectA.innerHTML = '<option value="">-- Chọn người dùng --</option>' + options;
  $selectB.innerHTML = '<option value="">-- Chọn người dùng --</option>' + options;
}

// Search Logic
document.getElementById('admin-user-search')?.addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  const $list = document.getElementById('admin-user-list');
  const items = $list.querySelectorAll('.admin-user-card');
  
  items.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(term) ? '' : 'none';
  });
});

window.handleToggleStatus = function(userId) {
  const profile = profiles.find(p => p.id === userId);
  if (profile) {
    profile.status = profile.status === 'active' ? 'locked' : 'active';
    showToast(`${profile.status === 'active' ? '✅ Đã kích hoạt' : '🔒 Đã khóa'} tài khoản ${profile.name}`);
    renderAdminDashboard();
  }
};

document.getElementById('btn-perform-match')?.addEventListener('click', () => {
  const id1 = parseInt(document.getElementById('match-user-a').value);
  const id2 = parseInt(document.getElementById('match-user-b').value);

  if (!id1 || !id2) {
    showToast('❌ Vui lòng chọn cả 2 người dùng!');
    return;
  }
  if (id1 === id2) {
    showToast('❌ Không thể ghép đôi một người với chính họ!');
    return;
  }

  const userA = profiles.find(p => p.id === id1);
  const userB = profiles.find(p => p.id === id2);

  // Manual match logic: create a special private chat
  // In a real app, this would notify both. Here we simulate creating a chat for 'me' (Admin acting as Broker)
  // or simulate the match event.
  
  const newChatId = 'cm' + Date.now();
  const brokerMsg = { 
    id: 'msg_broker', 
    from: 'them', 
    text: `💎 THÔNG BÁO MÔI GIỚI: Broker đã kết nối bạn với ${userB.name}. Hãy bắt đầu trò chuyện ngay!`, 
    time: 'Vừa xong',
    sEmoji: '💎',
    sGrad: 'linear-gradient(135deg, #f7971e, #ffd200)'
  };

  const newChat = {
    id: newChatId,
    name: `${userA.name} & ${userB.name} (Broker Match)`,
    emoji: '💎',
    gradient: 'linear-gradient(135deg, #f7971e, #ffd200)',
    photo: 'img/an.png',
    online: true,
    lastMsg: 'Người môi giới đã kết nối bạn!',
    time: 'Vừa xong',
    unread: 1,
    messages: [brokerMsg]
  };

  privateChats.unshift(newChat);
  renderChatList('private');
  
  showToast(`🚀 Đã ghép đôi thành công ${userA.name} và ${userB.name}!`);
  renderAdminDashboard();
});

// =====================================================
//  DARK MODE
// =====================================================
const $themeToggle = document.getElementById('theme-toggle');
const $themeIcon   = document.getElementById('theme-icon');
const $themeLabelText = document.getElementById('theme-label-text');

const MOON_PATH = 'M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z';
const SUN_PATH  = 'M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42M12 5a7 7 0 1 0 0 14A7 7 0 0 0 12 5z';

function applyTheme(isDark) {
  document.body.classList.toggle('dark', isDark);

  if ($themeToggle) $themeToggle.checked = isDark;

  if ($themeIcon) {
    $themeIcon.innerHTML = isDark
      ? `<path d="${SUN_PATH}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" fill="none"/>`
      : `<path d="${MOON_PATH}"/>`;
  }

  if ($themeLabelText) {
    $themeLabelText.textContent = isDark ? 'Chế độ sáng' : 'Chế độ tối';
  }

  localStorage.setItem('heartbeat-theme', isDark ? 'dark' : 'light');
}

// Áp dụng theme đã lưu khi tải trang
const _saved = localStorage.getItem('heartbeat-theme');
const _prefersDark = !_saved && window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(_saved === 'dark' || _prefersDark);

// Toggle khi checkbox thay đổi
$themeToggle?.addEventListener('change', () => {
  applyTheme($themeToggle.checked);
});

// Also toggle when click into the whole row (label row)
document.getElementById('theme-toggle-row')?.addEventListener('click', (e) => {
  if (e.target === $themeToggle || e.target.closest('label')) return;
  $themeToggle.click();
});

// =====================================================
//  THREADS MODAL LOGIC
// =====================================================
const $threadModal = document.getElementById('thread-composer-modal');
const $threadInput = document.getElementById('thread-input');
const $btnPublish = document.getElementById('btn-publish-thread');

document.getElementById('feed-composer-trigger')?.addEventListener('click', () => {
  if ($threadModal) {
    $threadModal.classList.remove('hidden');
    $threadInput.focus();
  }
});

document.getElementById('btn-close-thread')?.addEventListener('click', () => {
  $threadModal.classList.add('hidden');
});

$threadInput?.addEventListener('input', (e) => {
  const hasText = e.target.value.trim().length > 0;
  $btnPublish.disabled = !hasText;
});

$btnPublish?.addEventListener('click', () => {
  const content = $threadInput.value.trim();
  if (!content) return;

  const newPost = {
    id: Date.now(),
    author: "Nguyễn Minh Tú",
    handle: "@minhtu.nguyen",
    avatar: "😊",
    content: content,
    likes: 0,
    replies: 0,
    time: "Vừa xong"
  };

  socialData.unshift(newPost);
  renderFeed();
  renderMyPosts();
  
  // Reset and close
  $threadInput.value = '';
  $btnPublish.disabled = true;
  $threadModal.classList.add('hidden');
  showToast('✨ Thread của bạn đã được đăng thành công!');
});

// Close modal when clicking outside of the thread card
$threadModal?.addEventListener('click', (e) => {
  if (e.target === $threadModal) {
    $threadModal.classList.add('hidden');
  }
});

// =====================================================
//  SCHEDULE & CART LOGIC
// =====================================================

const datingCombos = {
  eat: [
    { 
      id: 1, name: 'Fine dining', price: '1,200,000đ', img: 'img/finedining.jpg',
      desc: 'Bàn tiệc nến tại nhà hàng view hồ Tây cực chilled',
      details: 'Trải nghiệm một buổi tối không thể quên với bàn tiệc cao cấp được trang trí bằng hoa tươi và nến thơm. Thực đơn 5 món phong cách Châu Âu kết hợp cùng rượu vang thượng hạng, tất cả trong không gian lãng mạn nhìn ra mặt hồ lấp lánh.',
      includes: ['Thực đơn 5 món cho 2 người', '1 chai vang đỏ/trắng', 'Trang trí nến & hoa', 'View mặt hồ ưu tiên'],
      address: 'Phường Quảng An, Quận Tây Hồ, Hà Nội'
    },
    { 
      id: 2, name: 'Old Quarter Afternoon Tea', price: '450,000đ', img: 'img/cafe.jpg',
      desc: 'Không gian yên tĩnh, trà ngon & bánh ngọt phong cách Pháp',
      details: 'Tận hưởng nhịp sống chậm giữa lòng phố cổ náo nhiệt. Set trà chiều bao gồm các loại trà thượng hạng chọn lọc và tháp bánh ngọt, bánh mặn được làm thủ công mỗi ngày. Một không gian hoàn hảo để trò chuyện và thấu hiểu nhau hơn.',
      includes: ['1 tháp bánh ngọt & mặn', 'Bình trà lớn (tự chọn vị)', 'Không gian yên tĩnh riêng tư', 'Nhạc không lời thư giãn'],
      address: 'Phố Hàng Khay, Quận Hoàn Kiếm, Hà Nội'
    },
    { 
      id: 3, name: 'Street Food Tour', price: '300,000đ', img: 'img/streetfood.jpg',
      desc: 'Khám phá 5 món ngon vỉa hè nổi tiếng cùng hướng dẫn viên',
      details: 'Dành cho những cặp đôi yêu thích sự trải nghiệm và ẩm thực địa phương. Hướng dẫn viên sẽ dẫn bạn qua những ngõ nhỏ để thưởng thức 5 món ăn huyền thoại của Hà Nội mà chỉ người bản địa mới biết. Một buổi hẹn hò đầy màu sắc và hương vị.',
      includes: ['5 món ăn đặc sản', 'Đồ uống đi kèm mỗi món', 'Hướng dẫn viên nhiệt tình', 'Quà lưu niệm nhỏ'],
      address: 'Khu vực Phố Cổ Hà Nội'
    },
  ],
  play: [
    { 
      id: 4, name: 'Pottery Workshop', price: '600,000đ', img: 'img/workshop_gom_1.jpg',
      desc: 'Cùng nhau tạo nên những kỷ niệm bằng đất sét tại studio nghệ thuật',
      details: 'Gửi gắm tình cảm vào những tác phẩm đất sét tự tay làm. Bạn và người ấy sẽ được nghệ nhân hướng dẫn từng bước từ nhào đất đến xoay gốm trên bàn xoay chuyên nghiệp. Một trải nghiệm gắn kết và mang về những món đồ lưu niệm ý nghĩa.',
      includes: ['2.5 giờ workshop', 'Nguyên liệu đất sét không giới hạn', 'Nghệ nhân hướng dẫn', 'Thành phẩm được nung & tráng men'],
      address: 'Làng gốm Bát Tràng / Studio Tây Hồ'
    },
    { 
      id: 5, name: 'Private Cinema Experience', price: '800,000đ', img: 'img/rapphim_1.jpg',
      desc: 'Phòng chiếu cao cấp dành cho 2 người với sofa da êm ái',
      details: 'Không gian điện ảnh chỉ dành riêng cho hai người. Hệ thống âm thanh vòm Dolby Atmos và màn hình 4K HDR mang lại trải nghiệm xem phim đỉnh cao. Sofa đôi cao cấp và dịch vụ phục vụ đồ ăn tại chỗ giúp buổi hẹn hò trở nên riêng tư tuyệt đối.',
      includes: ['2 vé xem phim (tùy chọn)', 'Bắp nước tiêu chuẩn', 'Phòng chiếu riêng biệt', 'Phục vụ tại phòng'],
      address: 'Các rạp CGV/Lotte cao cấp toàn quốc'
    },
    { 
      id: 6, name: 'Chèo Sup hoàng hôn', price: '700,000đ', img: 'img/hoanghon.jpg',
      desc: 'Trải nghiệm thể thao nước đầy thú vị trên Hồ Tây lúc xế chiều',
      details: 'Đón khoảnh khắc hoàng hôn rực rỡ nhất Hà Nội trên mặt nước Hồ Tây. Chèo SUP là cách tuyệt vời để thư giãn và cùng nhau ngắm nhìn thành phố từ một góc độ hoàn toàn mới. Một buổi hẹn năng động và đầy lãng mạn.',
      includes: ['2 ván chèo SUP cao cấp', 'Đồ bảo hộ & hướng dẫn', 'Gói chụp ảnh chuyên nghiệp', 'Nước uống giải khát'],
      address: 'Phố Nguyễn Đình Thi, Tây Hồ, Hà Nội'
    },
  ]
};

let purchasedOrders = JSON.parse(localStorage.getItem('heartbeat-orders') || '[]');


function renderPartnerSelect() {
  const $select = document.getElementById('schedule-partner-select');
  if (!$select) return;
  
  const options = profiles.map(p => `<option value="${p.id}">${p.emoji} ${p.name}</option>`).join('');
  $select.innerHTML = '<option value="">-- Chọn đối tượng hẹn hò --</option>' + options;
}

function renderCalendar() {
  renderPartnerSelect();
  const $grid = document.getElementById('calendar-grid');
  if (!$grid) return;
  $grid.innerHTML = '';
  // Simple mockup calendar for April (starts on Wed)
  const days = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
  days.forEach(d => {
    const el = document.createElement('div');
    el.className = 'cal-day-name';
    el.textContent = d;
    $grid.appendChild(el);
  });
  
  for(let i=1; i<=30; i++) {
    const el = document.createElement('div');
    el.className = 'cal-date';
    if (i === 18) el.classList.add('active'); // Today mockup
    el.textContent = i;
    el.onclick = () => {
      $grid.querySelectorAll('.cal-date').forEach(d => d.classList.remove('active'));
      el.classList.add('active');
    };
    $grid.appendChild(el);
  }
}

function openComboModal(comboId) {
  let combo = null;
  [...datingCombos.eat, ...datingCombos.play].forEach(c => { if(c.id == comboId) combo = c; });
  if (!combo) return;

  const $modal = document.getElementById('combo-modal');
  const $body = document.getElementById('combo-modal-body');
  const $price = document.getElementById('combo-modal-price');
  const $buyBtn = document.getElementById('combo-modal-buy-btn');

  $body.innerHTML = `
    <div class="combo-detail-hero">
      <img src="${combo.img}" alt="${combo.name}">
      <div class="hero-overlay"></div>
    </div>
    <div class="combo-detail-content">
      <div class="header-group">
        <span class="category-tag">${combo.address.includes('Hà Nội') ? 'Hà Nội' : 'Toàn quốc'}</span>
        <h1>${combo.name}</h1>
        <p class="combo-address">📍 ${combo.address}</p>
      </div>
      
      <div class="detail-section">
        <h3>Giới thiệu</h3>
        <p>${combo.details}</p>
      </div>
      
      <div class="detail-section">
        <h3>Gói này bao gồm</h3>
        <ul class="includes-list">
          ${combo.includes.map(inc => `<li><span>✓</span> ${inc}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;

  $price.textContent = combo.price;
  $buyBtn.onclick = () => {
    closeComboModal();
    initiateCheckout(combo.id);
  };

  $modal.classList.add('active');
  $modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeComboModal() {
  const $modal = document.getElementById('combo-modal');
  if ($modal) {
    $modal.classList.remove('active');
    $modal.classList.add('hidden');
  }
  document.body.style.overflow = '';
}

// ========== CHECKOUT LOGIC ==========
let selectedComboForCheckout = null;

function initiateCheckout(comboId) {
  let combo = null;
  [...datingCombos.eat, ...datingCombos.play].forEach(c => { if(c.id == comboId) combo = c; });
  if (!combo) return;

  selectedComboForCheckout = combo;
  switchView('checkout');

  // Populate Summary
  const $summaryItem = document.getElementById('checkout-order-item');
  const $subtotal = document.getElementById('summary-subtotal');
  const $total = document.getElementById('summary-total');

  $summaryItem.innerHTML = `
    <div class="summary-combo-card">
      <img src="${combo.img}" alt="${combo.name}">
      <div class="summary-combo-info">
        <h4>${combo.name}</h4>
        <p>${combo.price}</p>
      </div>
    </div>
  `;

  $subtotal.textContent = combo.price;
  $total.textContent = combo.price;

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setPaymentMethod(method) {
  const $cardBtn = document.getElementById('pay-card');
  const $qrBtn = document.getElementById('pay-qr');
  const $cardUI = document.getElementById('payment-card-ui');
  const $qrUI = document.getElementById('payment-qr-ui');

  if (method === 'card') {
    $cardBtn.classList.add('active');
    $qrBtn.classList.remove('active');
    $cardUI.classList.remove('hidden');
    $qrUI.classList.add('hidden');
  } else {
    $qrBtn.classList.add('active');
    $cardBtn.classList.remove('active');
    $qrUI.classList.remove('hidden');
    $cardUI.classList.add('hidden');
  }
}

function applyPromoCode() {
  const codeInput = document.getElementById('promo-code');
  const code = codeInput.value.trim().toUpperCase();
  const $discountLine = document.getElementById('discount-line');
  const $discountAmt = document.getElementById('summary-discount');
  const $total = document.getElementById('summary-total');
  
  if (!selectedComboForCheckout) return;
  
  // Extract number from price string (e.g., "1,200,000đ" -> 1200000)
  const basePrice = parseInt(selectedComboForCheckout.price.replace(/\D/g, ''));
  let discount = 0;

  if (code === 'HEARTBEAT50') {
    discount = basePrice * 0.5;
    showToast('🎉 Áp dụng mã thành công! Giảm 50%');
  } else if (code === 'LOVE20') {
    discount = basePrice * 0.2;
    showToast('✨ Áp dụng mã thành công! Giảm 20%');
  } else {
    // Check for custom check-in rewards
    const customVoucher = redeemedVouchers.find(v => v.code === code);
    if (customVoucher) {
        discount = customVoucher.value;
        showToast(`🎁 Áp dụng Voucher thành công! Giảm ${discount.toLocaleString()}đ`);
    } else {
        showToast('❌ Mã giảm giá không hợp lệ');
        return;
    }
  }

  const finalPrice = basePrice - discount;
  
  $discountAmt.textContent = `-${discount.toLocaleString()}đ`;
  $discountLine.classList.remove('hidden');
  $total.textContent = `${finalPrice.toLocaleString()}đ`;
  
  // Disable input/button after success
  codeInput.disabled = true;
  document.querySelector('.apply-btn').disabled = true;
}

function processPayment() {
  const $btn = document.getElementById('btn-final-pay');
  const originalText = $btn.innerHTML;

  $btn.disabled = true;
  $btn.innerHTML = `<div class="loading-spinner"></div> Đang kiểm tra...`;

  setTimeout(() => {
    // Save order logic
    if (selectedComboForCheckout) {
      const finalPrice = document.getElementById('summary-total')?.textContent || selectedComboForCheckout.price;
      
      const newOrder = {
        ...selectedComboForCheckout,
        price: finalPrice, // Use the actual paid total (with discount if any)
        orderId: 'HB' + Math.floor(Math.random() * 900000 + 100000),
        date: new Date().toLocaleDateString('vi-VN'),
        status: 'Đã thanh toán'
      };
      purchasedOrders.unshift(newOrder);
      localStorage.setItem('heartbeat-orders', JSON.stringify(purchasedOrders));
    }

    $btn.innerHTML = `<i class="fa-solid fa-circle-check"></i> Thành công!`;
    showToast('✨ Thanh toán thành công! Đơn hàng của bạn đã được ghi lại.');
    
    setTimeout(() => {
      switchView('cart');
      // Switch tab to history
      document.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
      const $historyBtn = document.querySelector('.pill-btn[data-cat="history"]');
      if ($historyBtn) $historyBtn.classList.add('active');
      renderCart('history');
      
      $btn.disabled = false;
      $btn.innerHTML = originalText;
      selectedComboForCheckout = null;
    }, 1500);
  }, 2000);
}

function renderCart(category = 'eat') {
  const $grid = document.getElementById('cart-items-grid');
  const $historyGrid = document.getElementById('order-history-grid');
  if (!$grid || !$historyGrid) return;

  if (category === 'history') {
    $grid.classList.add('hidden');
    $historyGrid.classList.remove('hidden');
    renderOrderHistory();
    return;
  }

  $grid.classList.remove('hidden');
  $historyGrid.classList.add('hidden');
  $grid.innerHTML = '';
  
  const items = datingCombos[category] || [];
  items.forEach(item => {
    const $card = document.createElement('div');
    $card.className = 'combo-card';
    $card.onclick = () => openComboModal(item.id);
    $card.innerHTML = `
      <div class="combo-img-container">
        <img src="${item.img}" alt="${item.name}">
      </div>
      <div class="combo-info">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="combo-footer">
          <span class="price">${item.price}</span>
          <button class="btn-buy-now">Mua ngay</button>
        </div>
      </div>
    `;
    $card.querySelector('.btn-buy-now').onclick = (e) => {
      e.stopPropagation();
      initiateCheckout(item.id);
    };
    $grid.appendChild($card);
  });
}

function renderOrderHistory() {
  const $el = document.getElementById('order-history-grid');
  if (!$el) return;
  
  if (purchasedOrders.length === 0) {
    $el.innerHTML = `
      <div style="text-align:center; padding: 80px 20px; color: var(--text-muted);">
        <div style="font-size: 3.5rem; margin-bottom: 24px;">📜</div>
        <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--text-primary);">Bạn chưa có đơn hàng nào</h3>
        <p style="margin-top: 8px;">Hãy bắt đầu buổi hẹn hò mơ ước bằng cách chọn một gói combo!</p>
      </div>
    `;
    return;
  }

  $el.innerHTML = purchasedOrders.map(order => `
    <div class="order-item-card">
      <img src="${order.img}" class="order-thumb" alt="${order.name}">
      <div class="order-details">
        <h4>${order.name}</h4>
        <div class="order-meta">
          <span>Mã đơn hàng: ${order.orderId}</span>
          <span><i class="fa-regular fa-calendar"></i> ${order.date}</span>
        </div>
      </div>
      <div style="text-align: right;">
        <div style="font-weight: 850; font-size: 1.2rem; color: var(--text-primary); margin-bottom: 8px;">${order.price}</div>
        <span class="status-badge paid">Đã thanh toán</span>
      </div>
    </div>
  `).join('');
}

document.querySelectorAll('.pill-btn').forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCart(btn.dataset.cat);
  };
});


// Removed duplicate nav-btn listeners to prevent conflict.
// All navigation is now handled by the consolidated listener above.

// ========== DAILY CHECK-IN LOGIC (MONTHLY XU ECONOMY) ==========
let userCoins = 1200; // Starting some coins for testing
let claimedDays = [1, 2, 5]; // Days already claimed this month
let claimedToday = false;
let redeemedVouchers = [];

const voucherData = [
  { id: 'v1', name: 'Voucher Đồng', desc: 'Giảm 20.000đ cho mọi đơn hàng', cost: 1000, value: 20000 },
  { id: 'v2', name: 'Voucher Bạc', desc: 'Giảm 100.000đ cho đơn từ 500k', cost: 5000, value: 100000 },
  { id: 'v3', name: 'Voucher Vàng', desc: 'Giảm 250.000đ cho đơn từ 1tr', cost: 10000, value: 250000 }
];

function renderCheckinGrid() {
  const $grid = document.getElementById('streak-grid');
  if (!$grid) return;
  $grid.innerHTML = '';

  for (let i = 1; i <= 30; i++) {
      const day = document.createElement('div');
      const isClaimed = claimedDays.includes(i);
      const isToday = i === 6 && !claimedToday; // Mocking today as day 6
      
      day.className = `streak-day ${isClaimed ? 'claimed' : ''} ${isToday ? 'active' : ''}`;
      day.innerHTML = `
          <div class="day-num">${i}</div>
          <div class="day-coin">
            <i class="${isClaimed ? 'fa-solid fa-circle-check' : 'fa-solid fa-coins'}" style="${isClaimed ? '' : 'color:#FFD60A'}"></i>
          </div>
      `;
      $grid.appendChild(day);
  }
  
  const $coinsVal = document.getElementById('user-coins');
  if ($coinsVal) $coinsVal.textContent = userCoins.toLocaleString();
  
  const $claimBtn = document.getElementById('btn-claim-today');
  const $successMsg = document.getElementById('checkin-completed-msg');
  if ($claimBtn && $successMsg) {
      if (claimedToday) {
          $claimBtn.classList.add('hidden');
          $successMsg.classList.remove('hidden');
      } else {
          $claimBtn.classList.remove('hidden');
          $successMsg.classList.add('hidden');
      }
  }
  renderVoucherStore();
}

function renderVoucherStore() {
  const $list = document.getElementById('voucher-list');
  if (!$list) return;
  $list.innerHTML = '';

  voucherData.forEach(v => {
      const item = document.createElement('div');
      item.className = 'voucher-item';
      const canAfford = userCoins >= v.cost;
      
      item.innerHTML = `
          <div class="voucher-info">
              <h4>${v.name}</h4>
              <p>${v.desc}</p>
              <div class="voucher-cost">Giá: ${v.cost.toLocaleString()} Xu</div>
          </div>
          <button class="btn-redeem" ${canAfford ? '' : 'disabled'} onclick="redeemVoucher('${v.id}')">
              Đổi ngay
          </button>
      `;
      $list.appendChild(item);
  });
}

window.redeemVoucher = function(vId) {
  const v = voucherData.find(x => x.id === vId);
  if (!v || userCoins < v.cost) return;

  const newCode = 'REWARD' + Math.floor(1000 + Math.random() * 9000);
  redeemedVouchers.push({ code: newCode, value: v.value });
  userCoins -= v.cost;
  
  showToast(`🎁 Đổi quà thành công! Mã ${v.name}: ${newCode}`);
  renderCheckinGrid();
  navigator.clipboard.writeText(newCode);
};

document.getElementById('btn-claim-today')?.addEventListener('click', () => {
  if (claimedToday) return;
  
  const reward = Math.floor(Math.random() * (500 - 200 + 1)) + 200;
  userCoins += reward;
  claimedDays.push(6); // Claim day 6
  claimedToday = true;
  
  showToast(`✨ Chúc mừng! Bạn nhận được ${reward} Xu.`);
  renderCheckinGrid();
});

// ========== SOCIAL FEED DATA ==========
const socialData = [
  { id: 101, author: "Nguyễn Minh Tú", handle: "@minhtu.dev", avatar: "MT", content: "Hôm nay thời tiết Hà Nội thật đẹp, rất thích hợp để dạo phố và thưởng thức một ly cafe trứng. ☕️🌥️", likes: 25, replies: 3, time: "1h" },
  { id: 102, author: "Nguyễn Minh Tú", handle: "@minhtu.dev", avatar: "MT", content: "Vừa đổi được voucher Apple Music từ điểm tích lũy của Heartbeat. Quá hời! 🎵✨ #apple #heartbeat", likes: 42, replies: 8, time: "1d" },
  { id: 1, author: "Linh Đan", handle: "@linhdan.travel", avatar: "LD", content: "Vừa trải nghiệm buổi workshop làm gốm từ Combo của Heartbeat. Thực sự rất thư giãn và ý nghĩa! 🍶✨ #dating #pottery", image: "img/lamgom.jpg", likes: 124, replies: 12, time: "2h" },
  { id: 2, author: "Hoàng Minh", handle: "@minh.hoang", avatar: "HM", content: "Có ai biết quán cafe nào chill chill ở mạn Tây Hồ không nhỉ? Đang muốn rủ crush đi date cuối tuần này. ☕️", likes: 45, replies: 28, time: "5h", thread: [{ author: "Phương Anh", handle: "@phanh.heart", avatar: "PA", content: "Bạn thử qua 'Nắng Cafe' xem, view hồ cực đỉnh luôn đấy!", likes: 5, time: "4h" }] },
  { id: 3, author: "Heartbeat Official", handle: "@heartbeat.app", avatar: "❤️", content: "Chúc mừng cặp đôi thứ 1000 đã kết nối thành công qua ứng dụng trong tháng này! Love is in the air. 🎈🥰", image: "img/finedining.jpg", likes: 890, replies: 56, time: "1d" },
  { id: 4, author: "Tuấn Anh", handle: "@tuananh.dev", avatar: "TA", content: "Lần đầu đi date mà trời mưa như trút nước, may mà book được cái Combo Cinema riêng tư. Cứu cánh thực sự! 🍿🎬", image: "img/rapphim2.jpg", likes: 210, replies: 15, time: "6h" },
  { id: 5, author: "Minh Thư", handle: "@mthu.bee", avatar: "MT", content: "Đố mọi người chủ đề nào dễ bắt chuyện nhất khi match lần đầu? Mình toàn bị bí từ... 😅", likes: 32, replies: 89, time: "8h" },
  { id: 6, author: "Quốc Bảo", handle: "@bao.strong", avatar: "QB", content: "Phở gánh Hàng Chiếu lúc 3h sáng với crush, tại sao không? Một trải nghiệm cực kỳ Hà Nội. 🍜🏮", image: "img/pho_1.jpg", likes: 156, replies: 22, time: "10h" },
  { id: 7, author: "Lan Hương", handle: "@huong.lan", avatar: "LH", content: "Mùa này đi SUP ngắm hoàng hôn ở Hồ Tây là nhất. Vừa lãng mạn vừa có ảnh đẹp mang về. 🛶🌅", image: "img/cheosup.jpg", likes: 342, replies: 18, time: "12h" },
  { id: 8, author: "Đức Huy", handle: "@huy.duc", avatar: "DH", content: "Mọi người nghĩ sao về việc chia sẻ hóa đơn trong buổi hẹn đầu tiên? 💸🤔", likes: 67, replies: 145, time: "15h" },
  { id: 9, author: "Thanh Hằng", handle: "@thanhhang.official", avatar: "TH", content: "Một buổi sáng bình yên với cafe và một cuốn sách hay. Đang chờ đợi một nửa có cùng sở thích. 📖☕️", image: "img/cafe_1.jpg", likes: 278, replies: 14, time: "18h" },
  { id: 10, author: "Gia Bách", handle: "@bach.gia", avatar: "GB", content: "Vừa match được một bạn nữ siêu hợp gu âm nhạc. Cảm ơn Heartbeat nhé! 🎸🎧", likes: 189, replies: 9, time: "21h" },
  { id: 11, author: "Mai Linh", handle: "@mailinh.99", avatar: "ML", content: "Hẹn hò ở workshop làm gốm là một ý tưởng không tồi đâu mọi người ạ. Tay trong tay nhào nặn siêu vui. 🏺💖", image: "img/lamgom_1.jpg", likes: 412, replies: 31, time: "1d" },
  { id: 12, author: "Hữu Phước", handle: "@phuoc.huu", avatar: "HP", content: "Nghe nói ai match được mình đều gặp may mắn cả năm đấy. Tin không? 😉✨", likes: 88, replies: 42, time: "1d" },
  { id: 13, author: "Ngọc Ánh", handle: "@anh.ngoc", avatar: "NA", content: "Thích cảm giác lang thang phố xá và ăn đồ ăn lề đường hơn là vào nhà hàng sang trọng. Có ai giống mình không? 🍡🍢", image: "img/xienban.jpg", likes: 523, replies: 67, time: "2d" },
  { id: 14, author: "Trọng Nghĩa", handle: "@nghia.trong", avatar: "TN", content: "Chiều nay Hồ Tây đẹp quá, ước gì có ai đó cùng ngồi đây ngắm hoàng hôn. 🌅☁️", likes: 145, replies: 21, time: "2d" },
  { id: 15, author: "Bích Phương", handle: "@phuong.bich", avatar: "BP", content: "Hãy là chính mình trong mọi buổi hẹn. Đừng cố tỏ ra hoàn hảo. Chân thành luôn là chìa khóa. ❤️🗝️", likes: 780, replies: 45, time: "2d" },
  { id: 16, author: "Việt Dũng", handle: "@dung.viet", avatar: "VD", content: "Tìm đồng đội đi chèo SUP cuối tuần này tại Hồ Tây. Ai đi không? 🚣‍♂️💦", image: "img/cheosup_2.jpg", likes: 92, replies: 38, time: "3d" },
  { id: 17, author: "Kim Chi", handle: "@chi.kim", avatar: "KC", content: "Bữa tối lãng mạn dưới ánh nến. Một kỷ niệm khó quên. 🕯️🥂", image: "img/finedining.jpg", likes: 612, replies: 28, time: "3d" },
  { id: 18, author: "Minh Quân", handle: "@quan.minh", avatar: "MQ", content: "Có ai rảnh tối nay không? Mình có 2 vé xem phim mà bạn thân hủy kèo phút chót. 🎟️🍿", likes: 56, replies: 72, time: "3d" },
  { id: 19, author: "Thùy Trang", handle: "@trang.thuy", avatar: "TT", content: "Cafe và chill. Cuối tuần nhẹ nhàng. 🌿☕", image: "img/cafe_2.jpg", likes: 312, replies: 19, time: "4d" },
  { id: 20, author: "Hoàng Long", handle: "@long.hoang", avatar: "HL", content: "Vừa tham gia workshop làm gốm, sản phẩm hơi 'méo' một tí nhưng kỷ niệm thì rất tròn. 😂🍯", image: "img/lamgom_3.jpg", likes: 198, replies: 24, time: "4d" },
  { id: 21, author: "Diệu Thúy", handle: "@thuy.dieu", avatar: "DT", content: "Tình yêu không phải là tìm kiếm người hoàn hảo, mà là học cách nhìn thấy những điều hoàn hảo từ một người không hoàn hảo. ✨", likes: 1200, replies: 110, time: "4d" },
  { id: 22, author: "Quang Hải", handle: "@hai.quang", avatar: "QH", content: "Đồ ăn đường phố Hà Nội đúng là cực phẩm. Ăn mãi không chán! 🥟🌶️", image: "img/strettfood_3.jpg", likes: 421, replies: 53, time: "5d" },
  { id: 23, author: "Tuyết Mai", handle: "@mai.tuyet", avatar: "TM", content: "Chờ đợi một người đủ kiên nhẫn để nghe mình kể những chuyện không đầu không cuối. 🌙💭", likes: 89, replies: 34, time: "5d" },
  { id: 24, author: "Khánh Nam", handle: "@nam.khanh", avatar: "KN", content: "Rạp chiếu phim riêng tư là chân ái cho mấy cặp đôi cần không gian riêng. Book ngay trên Heartbeat nhé! 📽️💖", image: "img/râpphim3.jpg", likes: 532, replies: 41, time: "5d" },
  { id: 25, author: "Yến Nhi", handle: "@nhi.yen", avatar: "YN", content: "Yêu bản thân trước khi yêu người khác. Bạn xứng đáng được trân trọng. 👑💖", likes: 945, replies: 56, time: "6d" },
  { id: 26, author: "Bảo Lâm", handle: "@lam.bao", avatar: "BL", content: "Chiều hoàng hôn buông không còn cô đơn vì đã có Heartbeat. 🌅🤝", likes: 167, replies: 12, time: "6d" },
  { id: 27, author: "Hồng Nhung", handle: "@nhung.hong", avatar: "HN", content: "Một bữa tối thật ngon và không gian thật đẹp. Cảm ơn vì tất cả. 🍷✨", image: "img/finedining_2.jpg", likes: 732, replies: 32, time: "1w" },
  { id: 28, author: "Thành Đạt", handle: "@dat.thanh", avatar: "TD", content: "Hà Nội mùa này đẹp lắm, dắt tay nhau đi dạo thì còn gì bằng. 🍂🧣", likes: 234, replies: 28, time: "1w" },
  { id: 29, author: "Cẩm Tú", handle: "@tu.cam", avatar: "CT", content: "Làm gốm mệt nhưng mà vui. Thành quả đầu tay đây mọi người ơi! 🎨🍶", image: "img/gom_3.jpg", likes: 489, replies: 44, time: "1w" },
  { id: 30, author: "Minh Triết", handle: "@triet.minh", avatar: "MT", content: "Ai cũng xứng đáng có một người khiến họ cảm thấy mình là điều quan trọng nhất. ❤️", likes: 1560, replies: 98, time: "1w" },
  { id: 31, author: "Kiều Anh", handle: "@anh.kieu", avatar: "KA", content: "Mùi cafe sáng sớm luôn khiến mình cảm thấy tràn đầy năng lượng. ☕️⚡", image: "img/25a7822be1f0509009c71cf382dbdc68.jpg", likes: 312, replies: 15, time: "1w" },
  { id: 32, author: "Anh Tuấn", handle: "@tuan.anh", avatar: "AT", content: "Vừa hoàn thành buổi SUP sunset. Phê chữ ê kéo dài! 🛶🔥", image: "img/sup_sunset.png", likes: 456, replies: 37, time: "2w" },
  { id: 33, author: "Thu Hà", handle: "@ha.thu", avatar: "TH", content: "Hạnh phúc đôi khi chỉ là cùng nhau ăn một bát phở nóng giữa đêm lạnh. 🍜❄️", image: "img/6bcb5287c3e201ab6ac50bb00d151337.jpg", likes: 678, replies: 82, time: "2w" },
  { id: 34, author: "Mạnh Hùng", handle: "@hung.manh", avatar: "MH", content: "Đừng bao giờ từ bỏ hy vọng tìm thấy tình yêu chân thành. Nó vẫn ở đâu đó thôi. ✨❤️", likes: 890, replies: 41, time: "2w" },
  { id: 35, author: "Linh Chi", handle: "@chi.linh", avatar: "LC", content: "Phim hay, bỏng ngô ngon và một người đồng hành tuyệt vời. 🎞️👩‍❤️‍👨", image: "img/065864f3373070e9390768001d2be60f.jpg", likes: 521, replies: 26, time: "2w" },
  { id: 36, author: "Gia Huy", handle: "@huy.gia", avatar: "GH", content: "Tối nay ăn gì nhỉ? Đang phân vân giữa lẩu và nướng... 🥘🍢", likes: 76, replies: 112, time: "3w" },
  { id: 37, author: "Ngọc Mai", handle: "@mai.ngoc", avatar: "NM", content: "Vẻ đẹp của một người nằm ở tâm hồn của họ. Hãy nhìn sâu vào bên trong. 💎💖", likes: 1340, replies: 76, time: "3w" },
  { id: 38, author: "Đăng Khoa", handle: "@khoa.dang", avatar: "DK", content: "Hoàng hôn Hồ Tây không bao giờ làm mình thất vọng. Đẹp rụng rời! 🌅✨", image: "img/ad741029f20fb5cb82cb40ecb817d488.jpg", likes: 389, replies: 24, time: "3w" },
  { id: 39, author: "Hương Giang", handle: "@giang.huong", avatar: "HG", content: "Một ngày làm gốm thật năng suất. Rất recommend mọi người thử nhé! 🍶👋", image: "img/2718621ee9ec09427396eb26de185027.jpg", likes: 267, replies: 19, time: "4w" },
  { id: 40, author: "Quang Vinh", handle: "@vinh.quang", avatar: "QV", content: "Cảm ơn Heartbeat đã giúp mình tìm thấy người định mệnh. Chúng mình vừa đính hôn rồi! 💍😭❤️", image: "img/finedining.jpg", likes: 5600, replies: 432, time: "1m" }
];

function renderFeed() {
  const $list = document.getElementById('feed-list');
  if (!$list) return;
  $list.innerHTML = '';

  socialData.forEach(post => {
    const $post = document.createElement('div');
    $post.className = 'feed-post';
    
    let threadHtml = '';
    if (post.thread) {
      post.thread.forEach(reply => {
        threadHtml += `
          <div class="feed-reply">
            <div class="post-aside">
              <div class="avatar-sm">${reply.avatar}</div>
            </div>
            <div class="post-main">
              <div class="post-header">
                <span class="author">${reply.author}</span>
                <span class="time">${reply.time}</span>
              </div>
              <div class="post-content">${reply.content}</div>
              <div class="post-actions">
                <span class="action-item"><svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></span>
              </div>
            </div>
          </div>
        `;
      });
    }

    $post.innerHTML = `
      <div class="post-aside">
        <div class="avatar-main ${post.author === 'Nguyễn Minh Tú' ? 'avatar-me' : ''}">${post.author === 'Nguyễn Minh Tú' ? '' : post.avatar}</div>
        ${post.thread ? '<div class="thread-line"></div>' : ''}
      </div>
      <div class="post-main">
        <div class="post-header">
          <span class="author">${post.author}</span>
          <span class="handle">${post.handle}</span>
          <span class="time">• ${post.time}</span>
        </div>
        <div class="post-content">${post.content}</div>
        ${post.image ? `<div class="post-image-container"><img src="${post.image}" alt="Post Image"></div>` : ''}
        <div class="post-actions">
          <div class="action-item" onclick="this.classList.toggle('active')">
            <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            <span>${post.likes}</span>
          </div>
          <div class="action-item">
            <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            <span>${post.replies}</span>
          </div>
          <div class="action-item">
            <!-- Font Awesome Repost -->
            <i class="fa-solid fa-arrows-rotate" style="font-size: 15px; opacity: 0.7;"></i>
          </div>
          <div class="action-item">
            <!-- Font Awesome Share (45deg Rotation) -->
            <i class="fa-regular fa-paper-plane" style="font-size: 15px; opacity: 0.7; transform: rotate(45deg);"></i>
          </div>
        </div>
        ${threadHtml}
      </div>
    `;
    $list.appendChild($post);
  });
}

function renderMyPosts() {
  const $list = document.getElementById('my-posts-list');
  if (!$list) return;
  $list.innerHTML = '';

  const myPosts = socialData.filter(p => p.author === "Nguyễn Minh Tú");
  
  if (myPosts.length === 0) {
    $list.innerHTML = '<div class="no-posts">Bạn chưa có bài viết nào.</div>';
    return;
  }

  myPosts.forEach(post => {
    const $post = document.createElement('div');
    $post.className = 'feed-post';
    $post.innerHTML = `
      <div class="post-aside">
        <div class="avatar-main avatar-me"></div>
      </div>
      <div class="post-main">
        <div class="post-header">
          <span class="author">${post.author}</span>
          <span class="handle">${post.handle}</span>
          <span class="time">• ${post.time}</span>
        </div>
        <div class="post-content">${post.content}</div>
        <div class="post-actions">
          <div class="action-item"><svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg><span>${post.likes}</span></div>
          <div class="action-item"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span>${post.replies}</span></div>
        </div>
      </div>
    `;
    $list.appendChild($post);
  });
}

document.querySelectorAll('.time-slot').forEach(slot => {
  slot.addEventListener('click', () => {
    document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('active'));
    slot.classList.add('active');
  });
});

document.querySelector('.confirm-btn')?.addEventListener('click', () => {
  const partnerId = document.getElementById('schedule-partner-select').value;
  if (!partnerId) {
    showToast('⚠️ Vui lòng chọn đối tượng trước khi lên lịch!');
    return;
  }
  const partner = profiles.find(p => p.id == partnerId);
  showToast(`🚀 Đã xác nhận lịch hẹn với ${partner.name} thành công!`);
});

// =====================================================
//  SCROLL INTERACTIONS
// =====================================================
let lastScrollTop = 0;
const $backToTop = document.getElementById('back-to-top');

function setupScrollInteractions() {
  document.querySelectorAll('.view').forEach(view => {
    // Store scroll state per view instance
    view.lastScrollTop = 0;
    
    view.addEventListener('scroll', () => {
      const scrollTop = view.scrollTop;
      
      // 1. Back to top visibility (Threshold 300px)
      if ($backToTop) {
        $backToTop.classList.toggle('visible', scrollTop > 300);
      }

      // 2. Smart header logic
      const header = view.querySelector('.swipe-header.mobile-only');
      if (header) {
        // ALWAYS show at top
        if (scrollTop < 50) {
          header.classList.remove('header-hidden');
        } 
        // Hide on scroll down, Show on scroll up
        else if (scrollTop > view.lastScrollTop && scrollTop > 100) {
          header.classList.add('header-hidden');
        } 
        else if (scrollTop < view.lastScrollTop) {
          header.classList.remove('header-hidden');
        }
      }
      
      view.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, { passive: true });
  });

  // Handle click for back to top
  if ($backToTop) {
    $backToTop.addEventListener('click', () => {
      const activeView = document.querySelector('.view.active');
      if (activeView) {
        activeView.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
}

// =====================================================
//  INIT
// =====================================================
function init() {
  try {
    console.log('Heartbeat initializing...');
    setupNavigation();
    
    // Start on Login view
    switchView('login');
    // Initial renders
    renderCards();
    renderFeed();
    renderCheckinGrid();
    renderMatchesGrid();
    renderHeatMap();
    renderChatList('private');
    renderChatList('group');
    renderAdminDashboard();
    renderCalendar();
    renderCart('eat');
    renderMyPosts();

    // Scroll helpers
    setupScrollInteractions();
  } catch (err) {
    console.error('Initialization failed:', err);
  }
}

init();
