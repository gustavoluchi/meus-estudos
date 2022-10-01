export class BusinessError extends Error {
  content: any;
  private constructor({
    message,
    options,
    content
  }: {
    message?: string;
    options?: ErrorOptions;
    content?: any;
  }) {
    super(message, options);
    this.content = content;
  }
  static create(options: {
    message?: string;
    options?: ErrorOptions;
    content?: any;
  }) {
    return new BusinessError(options);
  }
}
