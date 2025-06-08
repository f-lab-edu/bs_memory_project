import { getCardSortMethod } from '@apis/cardSortMethod';
import { ApiResultType } from '@/shared/types/apiResult.type';
import { ArrayElement } from '@/shared/types/arrayElement.type';

export type CardSortMethodsTypes = ApiResultType<typeof getCardSortMethod>;
export type CardSortMethod = ArrayElement<CardSortMethodsTypes>;
