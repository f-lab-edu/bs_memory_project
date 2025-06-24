import { ApiResultType } from '@/shared/types/apiResult.type';
import { ArrayElement } from '@/shared/types/arrayElement.type';
import { getCardHideOptions } from '@features/cardHideOptionSelect/api/getCardHideOptions';

export type Types = ApiResultType<typeof getCardHideOptions>;
export type CardHideOption = ArrayElement<Types>;
