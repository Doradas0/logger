import { Logger } from '../';

describe('Logger', () => {
  const logger = new Logger('test-service');
  it('1+1=2', () => {
    expect(1 + 1).toBe(2);
  });
  // it('should log info', () => {
  //   logger.info('info message');
  // });
  // it('should log warn', () => {
  //   logger.warn('warn message');
  // });
  // it('should log debug', () => {
  //   logger.debug('debug message');
  // });
  // it('should log error', () => {
  //   logger.error('error message', new Error('error'));
  // });
});
