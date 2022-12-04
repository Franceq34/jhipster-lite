import { Optional } from '@/common/domain/Optional';
import { JhliteTheme } from '@/module/secondary/JhliteTheme';
import { StorageTheme } from '@/common/domain/StorageTheme';

export class LocalStorageTheme implements StorageTheme {
  constructor(private readonly storage: Storage) {}

  get(): Optional<JhliteTheme> {
    return Optional.ofNullable(this.storage.getItem('theme'));
  }

  set(theme: JhliteTheme): void {
    this.storage.setItem('theme', theme);
  }
}
