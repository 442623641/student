/**
 *系统消息
 */
export class message {
  /**
   *唯一guid
   */
  guid: string;

  /**
   *消息内容
   */
  context: string;

  /**
   *标题
   */
  title: string;

  /**
   *日期时间
   */
  timestamp: string;

  /**
   *已读
   */
  readed: boolean;

  constructor(obj) {
    // code...
  }

}
