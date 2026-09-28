import { expect } from 'vitest';
import { toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

// jsdom (v30) expose HTMLDialogElement mais n'implémente ni showModal() ni
// close(). Sans ce complément, tout test touchant la fenêtre projet échoue.
// Attention : cela simule seulement l'ouverture/fermeture. Le piège de focus et
// l'inertie de l'arrière-plan, eux, restent l'affaire du vrai navigateur et ne
// sont donc pas couverts par ces tests.
if (!HTMLDialogElement.prototype.showModal) {
  HTMLDialogElement.prototype.showModal = function showModal() {
    this.open = true;
  };
}

if (!HTMLDialogElement.prototype.show) {
  HTMLDialogElement.prototype.show = function show() {
    this.open = true;
  };
}

if (!HTMLDialogElement.prototype.close) {
  HTMLDialogElement.prototype.close = function close(returnValue) {
    this.open = false;

    if (returnValue !== undefined) {
      this.returnValue = returnValue;
    }

    this.dispatchEvent(new Event('close'));
  };
}
