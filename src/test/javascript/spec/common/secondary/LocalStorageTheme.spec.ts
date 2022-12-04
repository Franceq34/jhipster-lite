import { LocalStorageTheme } from '@/common/secondary/LocalStorageTheme';
import { describe, expect, it } from 'vitest';
import sinon, { SinonStub } from 'sinon';

interface LocalStorageStub extends Storage {
  getItem: SinonStub;
  setItem: SinonStub;
}
const stubStorage = (): LocalStorageStub =>
  ({
    getItem: sinon.stub(),
    setItem: sinon.stub(),
  } as LocalStorageStub);

describe('LocalStorageTheme', () => {
  it('should get theme', () => {
    const storageStub = stubStorage();
    const storageTheme = new LocalStorageTheme(storageStub);

    storageTheme.get();

    const { args } = storageStub.getItem.getCall(0);
    expect(args).toEqual(['theme']);
  });

  it('should set theme', () => {
    const storageStub = stubStorage();
    const storageTheme = new LocalStorageTheme(storageStub);

    storageTheme.set('my-theme');

    const { args } = storageStub.setItem.getCall(0);
    expect(args).toEqual(['theme', 'my-theme']);
  });
});
