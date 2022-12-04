import { Optional } from '@/common/domain/Optional';

export class BodyThemeApplier {
  private currentTheme: Optional<string> = Optional.empty();
  constructor(private window: Window) {}

  set(maybeTheme: Optional<string>) {
    const theme = maybeTheme.orElse('default');
    this.window.document.body.classList.add(`-theme-${theme}`);
  }
}
