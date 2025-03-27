import { getCardHideOption } from '@apis/cardHideOption';
import { ApiResult, ArrayElement } from '@apis/custom.types';

export type CardHideOptions = ApiResult<typeof getCardHideOption>;
export type CardHideOption = ArrayElement<CardHideOptions>;
