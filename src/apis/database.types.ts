export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          operationName?: string;
          query?: string;
          variables?: Json;
          extensions?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
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
          bible_code: string;
          bible_name: string;
          bible_name_eng: string | null;
          chapter: number;
          short_name: string;
          short_name_eng: string | null;
        };
        Insert: {
          bible_code: string;
          bible_name: string;
          bible_name_eng?: string | null;
          chapter: number;
          short_name: string;
          short_name_eng?: string | null;
        };
        Update: {
          bible_code?: string;
          bible_name?: string;
          bible_name_eng?: string | null;
          chapter?: number;
          short_name?: string;
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
      bible_version: {
        Row: {
          code: string;
          name: string;
        };
        Insert: {
          code?: string;
          name: string;
        };
        Update: {
          code?: string;
          name?: string;
        };
        Relationships: [];
      };
      card_hide_option: {
        Row: {
          code: string;
          name: string;
        };
        Insert: {
          code: string;
          name: string;
        };
        Update: {
          code?: string;
          name?: string;
        };
        Relationships: [];
      };
      card_sort_method: {
        Row: {
          code: string;
          name: string;
        };
        Insert: {
          code: string;
          name: string;
        };
        Update: {
          code?: string;
          name?: string;
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
      exam_expose_option: {
        Row: {
          code: string;
          name: string;
        };
        Insert: {
          code: string;
          name: string;
        };
        Update: {
          code?: string;
          name?: string;
        };
        Relationships: [];
      };
      series: {
        Row: {
          category: string;
          category_eng: string;
          ord: number;
          parent_series: string | null;
          print_opt: string;
          series_code: string;
          series_name: string;
          series_name_eng: string;
          sub_series_opt: string;
          verse_count: number;
        };
        Insert: {
          category?: string;
          category_eng?: string;
          ord: number;
          parent_series?: string | null;
          print_opt?: string;
          series_code?: string;
          series_name?: string;
          series_name_eng?: string;
          sub_series_opt?: string;
          verse_count: number;
        };
        Update: {
          category?: string;
          category_eng?: string;
          ord?: number;
          parent_series?: string | null;
          print_opt?: string;
          series_code?: string;
          series_name?: string;
          series_name_eng?: string;
          sub_series_opt?: string;
          verse_count?: number;
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
          bible_code: string;
          bible_version: string;
          card_num: number;
          category: string;
          category_eng: string | null;
          chapter: number;
          chul_opt: string | null;
          double_opt: string | null;
          false_content: string | null;
          false_count: number | null;
          idx: number;
          memory_date: string | null;
          pass1_opt: string | null;
          pass2_opt: string | null;
          pass3_opt: string | null;
          print_opt: string | null;
          series_code: string;
          theme: string;
          theme_eng: string | null;
          verse_gae: string;
          verse_kjv: string | null;
          verse_kor: string;
          verse_niv: string | null;
          verse_opt: string | null;
          verse1: number;
          verse2: number;
        };
        Insert: {
          bible_code: string;
          bible_version?: string;
          card_num: number;
          category: string;
          category_eng?: string | null;
          chapter: number;
          chul_opt?: string | null;
          double_opt?: string | null;
          false_content?: string | null;
          false_count?: number | null;
          idx: number;
          memory_date?: string | null;
          pass1_opt?: string | null;
          pass2_opt?: string | null;
          pass3_opt?: string | null;
          print_opt?: string | null;
          series_code: string;
          theme: string;
          theme_eng?: string | null;
          verse_gae: string;
          verse_kjv?: string | null;
          verse_kor: string;
          verse_niv?: string | null;
          verse_opt?: string | null;
          verse1: number;
          verse2: number;
        };
        Update: {
          bible_code?: string;
          bible_version?: string;
          card_num?: number;
          category?: string;
          category_eng?: string | null;
          chapter?: number;
          chul_opt?: string | null;
          double_opt?: string | null;
          false_content?: string | null;
          false_count?: number | null;
          idx?: number;
          memory_date?: string | null;
          pass1_opt?: string | null;
          pass2_opt?: string | null;
          pass3_opt?: string | null;
          print_opt?: string | null;
          series_code?: string;
          theme?: string;
          theme_eng?: string | null;
          verse_gae?: string;
          verse_kjv?: string | null;
          verse_kor?: string;
          verse_niv?: string | null;
          verse_opt?: string | null;
          verse1?: number;
          verse2?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'verse_bible_code_fkey';
            columns: ['bible_code'];
            isOneToOne: false;
            referencedRelation: 'bible_code';
            referencedColumns: ['bible_code'];
          },
          {
            foreignKeyName: 'verse_series_code_fkey';
            columns: ['series_code'];
            isOneToOne: false;
            referencedRelation: 'series';
            referencedColumns: ['series_code'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
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
