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
    photos: ['https://i.pravatar.cc/400?img=5', 'https://i.pravatar.cc/400?img=9', 'https://i.pravatar.cc/400?img=5'],
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
    photos: ['https://i.pravatar.cc/400?img=11', 'https://i.pravatar.cc/400?img=11', 'https://i.pravatar.cc/400?img=11'],
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
    photos: ['https://i.pravatar.cc/400?img=9', 'https://i.pravatar.cc/400?img=5', 'https://i.pravatar.cc/400?img=9'],
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
    zodiac: 'Thiên Bình ♎',
    emoji: '🎵',
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
    photos: ['https://i.pravatar.cc/400?img=11', 'https://i.pravatar.cc/400?img=11', 'https://i.pravatar.cc/400?img=11'],
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
    photos: ['https://i.pravatar.cc/400?img=5', 'https://i.pravatar.cc/400?img=9', 'https://i.pravatar.cc/400?img=5'],
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
    zodiac: 'Ma Kết ♑',
    emoji: '🏗️',
    gradient: 'linear-gradient(135deg, #a18cd1, #fbc2eb)',
    photos: ['https://i.pravatar.cc/400?img=11', 'https://i.pravatar.cc/400?img=11', 'https://i.pravatar.cc/400?img=11'],
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
    photos: ['https://i.pravatar.cc/400?img=9', 'https://i.pravatar.cc/400?img=5', 'https://i.pravatar.cc/400?img=9'],
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
    zodiac: 'Sư Tử ♌',
    emoji: '🚀',
    gradient: 'linear-gradient(135deg, #0f3460, #533483)',
    photos: ['https://i.pravatar.cc/400?img=11', 'https://i.pravatar.cc/400?img=11', 'https://i.pravatar.cc/400?img=11'],
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
    photos: ['https://i.pravatar.cc/400?img=5', 'https://i.pravatar.cc/400?img=9', 'https://i.pravatar.cc/400?img=5'],
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
    zodiac: 'Nhân Mã ♐',
    emoji: '📷',
    gradient: 'linear-gradient(135deg, #2c3e50, #4ca1af)',
    photos: ['https://i.pravatar.cc/400?img=11', 'https://i.pravatar.cc/400?img=11', 'https://i.pravatar.cc/400?img=11'],
    isNew: false,
    status: 'active',
  },
];

const privateChats = [
  {
    id: 'c1',
    name: 'Linh 🌸',
    emoji: '🌸',
    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
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
    name: 'Hà 🌺',
    emoji: '🌺',
    gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
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
    name: 'Mai 🌻',
    emoji: '🌻',
    gradient: 'linear-gradient(135deg, #fddb92, #d1fdff)',
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
    name: 'Trang 💎',
    emoji: '💎',
    gradient: 'linear-gradient(135deg, #f7971e, #ffd200)',
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
    name: 'An 🦋',
    emoji: '🦋',
    gradient: 'linear-gradient(135deg, #fa709a, #fee140)',
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
    name: '🔥 Heartbeat  Hà Nội',
    emoji: '🔥',
    gradient: 'linear-gradient(135deg, #fd5068, #a855f7)',
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
//  NAVIGATION
// =====================================================
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const viewId = {
      'nav-swipe': 'swipe',
      'nav-matches': 'matches',
      'nav-chat': 'chat',
      'nav-heatmap': 'heatmap',
      'nav-profile': 'profile',
      'nav-admin': 'admin',
    }[btn.id];
    if (viewId) {
      switchView(viewId);
      if (viewId === 'admin') renderAdminDashboard();
      if (viewId === 'heatmap') renderHeatMap();
      // Close sidebar on mobile after clicking
      if (window.innerWidth <= 660) {
        closeSidebar();
      }
    }
  });
});

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
  currentView = viewId;
  
  // Update Views
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + viewId).classList.add('active');
  
  // Sync Sidebar
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('nav-' + viewId)?.classList.add('active');
  
  // Sync Mobile Bottom Nav
  document.querySelectorAll('#mobile-bottom-nav .nav-item').forEach(i => {
    i.classList.toggle('active', i.dataset.view === viewId);
  });

  // On mobile, hide floating bottom nav in chat view
  if ($mobileBottomNav) {
    const shouldHideBottomNav = window.innerWidth <= 660 && viewId === 'chat';
    $mobileBottomNav.classList.toggle('hidden', shouldHideBottomNav);
  }

  if (viewId === 'heatmap') {
    renderHeatMap();
  }

  // Close sidebar on mobile after switching
  if (window.innerWidth <= 660) {
    closeSidebar();
  }
}

// Mobile Bottom Nav Click Handlers
document.querySelectorAll('#mobile-bottom-nav .nav-item').forEach(btn => {
  btn.addEventListener('click', () => {
    const view = btn.dataset.view;
    switchView(view);
  });
});

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
    <button class="card-expand-btn" data-id="${profile.id}" title="Xem hồ sơ">ℹ️</button>
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
function renderMatchesGrid() {
  $matchesGrid.innerHTML = '';
  // Show first 6 as "matches"
  profiles.slice(0, 6).forEach(p => {
    const card = document.createElement('div');
    card.className = 'match-card';
    card.innerHTML = `
      <div class="match-card-bg" style="background:${p.gradient}">
        ${p.photos && p.photos.length > 0
          ? `<img src="${p.photos[0]}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0" onerror="this.remove()">`
          : `<span>${p.emoji}</span>`}
      </div>
      <div class="match-card-gradient"></div>
      ${p.isNew ? '<div class="match-new-badge">Mới</div>' : ''}
      <div class="match-card-info">
        <div class="match-card-name">${p.name}</div>
        <div class="match-card-age">${p.age} tuổi</div>
      </div>
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
  // Use remaining profiles (7-10) as suggestions
  profiles.slice(6).forEach(p => {
    const card = document.createElement('div');
    card.className = 'suggest-card';
    card.innerHTML = `
      <div class="suggest-card-photo" style="background:${p.gradient}">
        ${p.photos && p.photos.length > 0
          ? `<img src="${p.photos[0]}" style="width:100%;height:100%;object-fit:cover" onerror="this.style.display='none'">`
          : `<span>${p.emoji}</span>`}
      </div>
      <div class="suggest-card-info">
        <div class="suggest-card-name">${p.name}, ${p.age}</div>
        <div class="suggest-card-dist">📍 ${p.location.split(',')[1]?.trim() || p.location}</div>
        <button class="suggest-card-like">💚 Thích</button>
      </div>
    `;
    card.querySelector('.suggest-card-like').addEventListener('click', (e) => {
      e.stopPropagation();
      showToast(`💚 Bạn đã thích ${p.name}!`);
      card.style.transform = 'scale(0.9)';
      card.style.opacity = '0.5';
      setTimeout(() => card.remove(), 400);
    });
    card.addEventListener('click', () => openProfileModal(p));
    $scroll.appendChild(card);
  });
}

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
      score: Math.min(99, 58 + count * 12 + (area.length % 9))
    }))
    .sort((a, b) => b.count - a.count);

  // Render hotspot side list
  $heatmapHotspotList.innerHTML = hotspots.slice(0, 6).map((h, idx) => `
    <div class="hotspot-item">
      <div class="hotspot-title">#${idx + 1} ${h.area}</div>
      <div class="hotspot-sub">${h.count} người hoạt động · độ sôi động ${h.score}%</div>
    </div>
  `).join('');

  // Create heat cells (32 cells), distributed by hotspots
  const cells = [];
  const hotspotPool = hotspots.length > 0 ? hotspots : [{ area: 'Khu vực khác', count: 1, score: 50 }];
  for (let i = 0; i < 32; i++) {
    const ref = hotspotPool[i % hotspotPool.length];
    const variance = ((i * 13) % 3) - 1;
    const count = Math.max(1, ref.count + variance);
    cells.push({
      area: ref.area,
      count,
      level: getHeatLevel(count)
    });
  }

  $heatmapGrid.innerHTML = cells.map((cell, idx) => `
    <button class="heat-cell ${cell.level}" data-area="${cell.area}" data-count="${cell.count}" title="${cell.area}">
      <span>${idx + 1}</span>
      <span class="count">${cell.count}</span>
    </button>
  `).join('');

  $heatmapGrid.querySelectorAll('.heat-cell').forEach(cell => {
    cell.addEventListener('click', () => {
      const area = cell.dataset.area;
      const count = parseInt(cell.dataset.count || '0', 10);
      const areaProfiles = profiles.filter(p => getAreaLabel(p.location) === area);
      const sample = areaProfiles[Math.floor(Math.random() * Math.max(areaProfiles.length, 1))];
      showToast(`📍 ${area}: ${count} điểm nóng. ${sample ? 'Nổi bật: ' + sample.name : 'Hãy khám phá ngay!'}`);
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
      <div class="${avatarClass}" style="background:${conv.gradient}">
        ${conv.emoji}
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
  $avatar.style.background = conv.gradient;
  $avatar.textContent = conv.emoji;
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
      mini.style.background = msg.sGrad || 'linear-gradient(135deg,#f093fb,#f5576c)';
      mini.textContent = msg.sEmoji || '🙂';
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
    wrap.appendChild(timeEl);
    group.appendChild(wrap);

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
    const replyMsg = { id: 'm' + Date.now(), from: 'them', text: reply, time: timeStr, sEmoji: conv.emoji, sGrad: conv.gradient };
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
function showToast(msg) {
  $toast.textContent = msg;
  $toast.classList.remove('hidden');
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
        <div class="user-avatar-mini" style="background:${p.gradient}">${p.emoji}</div>
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
    id: document.id = newChatId,
    name: `${userA.name} & ${userB.name} (Broker Match)`,
    emoji: '💎',
    gradient: 'linear-gradient(135deg, #f7971e, #ffd200)',
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

// Cũng toggle khi click vào cả dòng (label row)
document.getElementById('theme-toggle-row')?.addEventListener('click', (e) => {
  if (e.target === $themeToggle || e.target.closest('label')) return;
  $themeToggle.click();
});

// =====================================================
//  INIT
// =====================================================
function init() {
  renderCards();
  renderMatchesGrid();
  renderHeatMap();
  renderChatList('private');
  renderChatList('group');
  renderAdminDashboard();
}

init();
