const mockAlert = () => {
  vi.spyOn(window, 'alert').mockImplementation(() => {});
};

export default mockAlert;
