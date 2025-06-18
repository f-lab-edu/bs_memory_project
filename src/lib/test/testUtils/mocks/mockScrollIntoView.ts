const mockScrollIntoView = () => {
  window.HTMLElement.prototype.scrollIntoView = vi.fn();
};

export default mockScrollIntoView;
