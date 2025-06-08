import { getCardHideOption } from '@apis/cardHideOption';
import { ApiResultType } from '@/shared/types/apiResult.type';
import { ArrayElement } from '@/shared/types/arrayElement.type';

export type CardHideOptionTypes = ApiResultType<typeof getCardHideOption>;
export type CardHideOption = ArrayElement<CardHideOptionTypes>;
