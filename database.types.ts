import { BIBLE_VERSION } from './src/constants/bibleVersion.ts';

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      android_metadata: {
        Row: {
          locale: string | null;
        };
        Insert: {
          locale?: string | null;
        };
        Update: {
          locale?: string | null;
        };
        Relationships: [];
      };
      bible_code: {
        Row: {
          bible_code: string | null;
          bible_name: string | null;
          bible_name_eng: string | null;
          chapter: number | null;
          short_name: string | null;
          short_name_eng: string | null;
        };
        Insert: {
          bible_code?: string | null;
          bible_name?: string | null;
          bible_name_eng?: string | null;
          chapter?: number | null;
          short_name?: string | null;
          short_name_eng?: string | null;
        };
        Update: {
          bible_code?: string | null;
          bible_name?: string | null;
          bible_name_eng?: string | null;
          chapter?: number | null;
          short_name?: string | null;
          short_name_eng?: string | null;
        };
        Relationships: [];
      };
      bible_read: {
        Row: {
          bible_code: string | null;
          chapter: number | null;
          read: string | null;
          read_date: string | null;
        };
        Insert: {
          bible_code?: string | null;
          chapter?: number | null;
          read?: string | null;
          read_date?: string | null;
        };
        Update: {
          bible_code?: string | null;
          chapter?: number | null;
          read?: string | null;
          read_date?: string | null;
        };
        Relationships: [];
      };
      config: {
        Row: {
          oyo_backup: string | null;
          verse_update: string | null;
        };
        Insert: {
          oyo_backup?: string | null;
          verse_update?: string | null;
        };
        Update: {
          oyo_backup?: string | null;
          verse_update?: string | null;
        };
        Relationships: [];
      };
      series: {
        Row: {
          category: string | null;
          category_eng: string | null;
          ord: number | null;
          print_opt: string | null;
          series_code: string | null;
          series_name: string | null;
          series_name_eng: string | null;
          verse_count: number | null;
        };
        Insert: {
          category?: string | null;
          category_eng?: string | null;
          ord?: number | null;
          print_opt?: string | null;
          series_code?: string | null;
          series_name?: string | null;
          series_name_eng?: string | null;
          verse_count?: number | null;
        };
        Update: {
          category?: string | null;
          category_eng?: string | null;
          ord?: number | null;
          print_opt?: string | null;
          series_code?: string | null;
          series_name?: string | null;
          series_name_eng?: string | null;
          verse_count?: number | null;
        };
        Relationships: [];
      };
      series_oyo: {
        Row: {
          category: string | null;
          series_code: string | null;
          series_name: string | null;
        };
        Insert: {
          category?: string | null;
          series_code?: string | null;
          series_name?: string | null;
        };
        Update: {
          category?: string | null;
          series_code?: string | null;
          series_name?: string | null;
        };
        Relationships: [];
      };
      test: {
        Row: {
          card_idx: number | null;
          gubun: string | null;
          result: string | null;
          test_date: string | null;
          test_idx: number | null;
        };
        Insert: {
          card_idx?: number | null;
          gubun?: string | null;
          result?: string | null;
          test_date?: string | null;
          test_idx?: number | null;
        };
        Update: {
          card_idx?: number | null;
          gubun?: string | null;
          result?: string | null;
          test_date?: string | null;
          test_idx?: number | null;
        };
        Relationships: [];
      };
      userdata: {
        Row: {
          dbname: string | null;
          series_idx: string | null;
        };
        Insert: {
          dbname?: string | null;
          series_idx?: string | null;
        };
        Update: {
          dbname?: string | null;
          series_idx?: string | null;
        };
        Relationships: [];
      };
      verse: {
        Row: {
          bible_code: string | null;
          bible_version: string | null;
          card_num: number | null;
          category: string | null;
          category_eng: string | null;
          chapter: number | null;
          chul_opt: string | null;
          double_opt: string | null;
          false_content: string | null;
          false_count: number | null;
          idx: number | null;
          memory_date: string | null;
          pass1_opt: string | null;
          pass2_opt: string | null;
          pass3_opt: string | null;
          print_opt: string | null;
          series_code: string | null;
          theme: string | null;
          theme_eng: string | null;
          verse_gae: string | null;
          verse_kjv: string | null;
          verse_kor: string | null;
          verse_niv: string | null;
          verse_opt: string | null;
          verse1: number | null;
          verse2: number | null;
        };
        Insert: {
          bible_code?: string | null;
          bible_version?: string | null;
          card_num?: number | null;
          category?: string | null;
          category_eng?: string | null;
          chapter?: number | null;
          chul_opt?: string | null;
          double_opt?: string | null;
          false_content?: string | null;
          false_count?: number | null;
          idx?: number | null;
          memory_date?: string | null;
          pass1_opt?: string | null;
          pass2_opt?: string | null;
          pass3_opt?: string | null;
          print_opt?: string | null;
          series_code?: string | null;
          theme?: string | null;
          theme_eng?: string | null;
          verse_gae?: string | null;
          verse_kjv?: string | null;
          verse_kor?: string | null;
          verse_niv?: string | null;
          verse_opt?: string | null;
          verse1?: number | null;
          verse2?: number | null;
        };
        Update: {
          bible_code?: string | null;
          bible_version?: string | null;
          card_num?: number | null;
          category?: string | null;
          category_eng?: string | null;
          chapter?: number | null;
          chul_opt?: string | null;
          double_opt?: string | null;
          false_content?: string | null;
          false_count?: number | null;
          idx?: number | null;
          memory_date?: string | null;
          pass1_opt?: string | null;
          pass2_opt?: string | null;
          pass3_opt?: string | null;
          print_opt?: string | null;
          series_code?: string | null;
          theme?: string | null;
          theme_eng?: string | null;
          verse_gae?: string | null;
          verse_kjv?: string | null;
          verse_kor?: string | null;
          verse_niv?: string | null;
          verse_opt?: string | null;
          verse1?: number | null;
          verse2?: number | null;
        };
        Relationships: [];
      };
    };
    Views: Record<never, never>;
    Functions: Record<never, never>;
    Enums: Record<never, never>;
    CompositeTypes: Record<never, never>;
  };
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
        PublicSchema['Views'])
    ? (PublicSchema['Tables'] &
        PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema['CompositeTypes']
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes']
    ? PublicSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never;

export type SeriesRowData = Database['public']['Tables']['series']['Row'];

export type BibleVersionName =
  (typeof BIBLE_VERSION)[keyof typeof BIBLE_VERSION]['name'];

export type BibleVersionCode =
  (typeof BIBLE_VERSION)[keyof typeof BIBLE_VERSION]['code'];
