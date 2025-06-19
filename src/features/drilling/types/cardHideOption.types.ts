import { ApiResultType } from '@/shared/types/apiResult.type';
import { ArrayElement } from '@/shared/types/arrayElement.type';
import { getCardHideOptions } from '@features/cardHideOptionSelect/api/getCardHideOptions';

export type CardHideOptionTypes = ApiResultType<typeof getCardHideOptions>;
export type CardHideOption = ArrayElement<CardHideOptionTypes>;
