export interface ShortModel {
  _id?: string;
  name?: string;
  thumb_url?: string;
  source?: string; // Nguồn của video ngắn
  view?: string; // Số lượt đã xem của video ngắn
  topic?: [string]; // Chủ đề của video ngắn
}
