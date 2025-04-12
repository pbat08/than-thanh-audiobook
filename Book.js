const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Vui lòng nhập tiêu đề sách'],
    trim: true
  },
  author: {
    type: String,
    required: [true, 'Vui lòng nhập tác giả'],
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Vui lòng chọn thể loại'],
    enum: ['truyen-co-tich', 'tho-ca-dao', 'truyen-tich-cuc']
  },
  description: {
    type: String,
    required: [true, 'Vui lòng nhập mô tả sách']
  },
  coverImage: {
    type: String,
    required: [true, 'Vui lòng thêm ảnh bìa']
  },
  content: {
    type: String,
    required: [true, 'Vui lòng thêm nội dung sách']
  },
  audioFiles: [{
    chapter: Number,
    url: String,
    duration: Number
  }],
  duration: {
    type: Number,
    default: 0
  },
  popularity: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Virtual for category display name
bookSchema.virtual('categoryDisplay').get(function() {
  const categories = {
    'truyen-co-tich': 'Truyện cổ tích, dân gian',
    'tho-ca-dao': 'Thơ, ca dao, tục ngữ',
    'truyen-tich-cuc': 'Những mẫu chuyện tích cực'
  };
  return categories[this.category] || this.category;
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book; 