import { GameboardModule } from './gameboard.module';

describe('GameboardModule', () => {
  let gameboardModule: GameboardModule;

  beforeEach(() => {
    gameboardModule = new GameboardModule();
  });

  it('should create an instance', () => {
    expect(gameboardModule).toBeTruthy();
  });
});
