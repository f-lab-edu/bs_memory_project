import { waitForElementToBeRemoved } from '@testing-library/react';

const waitForElementToBeRemovedIfExist = async (
  ...args: Parameters<typeof waitForElementToBeRemoved>
) => {
  if (args[0]) await waitForElementToBeRemoved(...args);
};

export default waitForElementToBeRemovedIfExist;
