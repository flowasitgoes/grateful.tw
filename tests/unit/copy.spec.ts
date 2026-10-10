import { describe, expect, it } from 'vitest';
import { COPY, INSTAGRAM_HREF } from '../../shared/frontend/ui/copy';

describe('COPY', () => {
  it('matches 06-ui-ux Instagram link', () => {
    expect(COPY.menu).toBe('選單');
    expect(COPY.menuClose).toBe('關閉');
    expect(COPY.instagram).toBe('riddles.tw');
    expect(INSTAGRAM_HREF).toBe('https://www.instagram.com/riddles.tw');
  });

  it('matches 06-ui-ux login and today copy', () => {
    expect(COPY.loginTitle).toBe('登入');
    expect(COPY.loginButton).toBe('登入');
    expect(COPY.loginLoading).toBe('登入中');
    expect(COPY.loginFailed).toBe('登入失敗');
    expect(COPY.todayTitle).toBe('今天');
    expect(COPY.save).toBe('儲存');
    expect(COPY.logout).toBe('登出');
    expect(COPY.sectionHint).toBe('1～3 句，可留空。');
    expect(COPY.reading).toBe('讀取中');
    expect(COPY.readFailed).toBe('讀取失敗');
    expect(COPY.saving).toBe('儲存中');
    expect(COPY.saveFailed).toBe('儲存失敗');
    expect(COPY.saved).toBe('已儲存');
    expect(COPY.reading).not.toBe(COPY.readFailed);
    expect(COPY.saving).not.toBe(COPY.saveFailed);
    expect(COPY.saving).not.toBe(COPY.saved);
  });
});
