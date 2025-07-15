export interface LiveStreamModel {
  _id?: string;
  isLiveStream?: boolean;
  avatarPageUrl?: string; // URL của kênh livestream
  name?: string;
  thumb_url?: string;
  time?: string; // Thời gian bắt đầu livestream
  topic?: [string]; // Chủ đề của livestream
  viewing?: string; // Số người đang xem trực tiếp
}
