export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      carbon_certificates: {
        Row: {
          action_type: string
          co2_amount: number
          created_at: string
          id: string
          polygon_address: string | null
          profile_id: string
          status: string
          verification_data: Json | null
        }
        Insert: {
          action_type: string
          co2_amount: number
          created_at?: string
          id?: string
          polygon_address?: string | null
          profile_id: string
          status?: string
          verification_data?: Json | null
        }
        Update: {
          action_type?: string
          co2_amount?: number
          created_at?: string
          id?: string
          polygon_address?: string | null
          profile_id?: string
          status?: string
          verification_data?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "carbon_certificates_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      certificate_marketplace: {
        Row: {
          certificate_id: string
          created_at: string
          id: string
          price: number
          seller_id: string
          status: string
        }
        Insert: {
          certificate_id: string
          created_at?: string
          id?: string
          price: number
          seller_id: string
          status?: string
        }
        Update: {
          certificate_id?: string
          created_at?: string
          id?: string
          price?: number
          seller_id?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "certificate_marketplace_certificate_id_fkey"
            columns: ["certificate_id"]
            isOneToOne: false
            referencedRelation: "carbon_certificates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "certificate_marketplace_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      green_tokens: {
        Row: {
          amount: number
          id: string
          profile_id: string
          staked_amount: number
          staking_end_date: string | null
          updated_at: string
        }
        Insert: {
          amount?: number
          id?: string
          profile_id: string
          staked_amount?: number
          staking_end_date?: string | null
          updated_at?: string
        }
        Update: {
          amount?: number
          id?: string
          profile_id?: string
          staked_amount?: number
          staking_end_date?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "green_tokens_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          buyer_id: string
          created_at: string
          id: string
          payment_method: string
          product_id: string
          quantity: number
          status: string
          total_amount: number
        }
        Insert: {
          buyer_id: string
          created_at?: string
          id?: string
          payment_method: string
          product_id: string
          quantity: number
          status?: string
          total_amount: number
        }
        Update: {
          buyer_id?: string
          created_at?: string
          id?: string
          payment_method?: string
          product_id?: string
          quantity?: number
          status?: string
          total_amount?: number
        }
        Relationships: [
          {
            foreignKeyName: "orders_buyer_id_fkey"
            columns: ["buyer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          category: string
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          name: string
          organic_certified: boolean | null
          price: number
          seller_id: string
          stock_quantity: number | null
        }
        Insert: {
          category: string
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name: string
          organic_certified?: boolean | null
          price: number
          seller_id: string
          stock_quantity?: number | null
        }
        Update: {
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name?: string
          organic_certified?: boolean | null
          price?: number
          seller_id?: string
          stock_quantity?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "products_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          co2_emissions: number | null
          company_name: string | null
          created_at: string
          email: string | null
          id: string
          industry: string | null
          materials: string | null
          name: string
          phone: string | null
          product_description: string | null
          updated_at: string
          user_id: string
          user_type: string
        }
        Insert: {
          co2_emissions?: number | null
          company_name?: string | null
          created_at?: string
          email?: string | null
          id?: string
          industry?: string | null
          materials?: string | null
          name: string
          phone?: string | null
          product_description?: string | null
          updated_at?: string
          user_id: string
          user_type: string
        }
        Update: {
          co2_emissions?: number | null
          company_name?: string | null
          created_at?: string
          email?: string | null
          id?: string
          industry?: string | null
          materials?: string | null
          name?: string
          phone?: string | null
          product_description?: string | null
          updated_at?: string
          user_id?: string
          user_type?: string
        }
        Relationships: []
      }
      questionnaires: {
        Row: {
          answers: Json
          completed_at: string
          id: string
          profile_id: string
        }
        Insert: {
          answers: Json
          completed_at?: string
          id?: string
          profile_id: string
        }
        Update: {
          answers?: Json
          completed_at?: string
          id?: string
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "questionnaires_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      ratings: {
        Row: {
          id: string
          nft_reward: string | null
          profile_id: string
          rank_position: number | null
          total_co2_saved: number
          updated_at: string
        }
        Insert: {
          id?: string
          nft_reward?: string | null
          profile_id: string
          rank_position?: number | null
          total_co2_saved?: number
          updated_at?: string
        }
        Update: {
          id?: string
          nft_reward?: string | null
          profile_id?: string
          rank_position?: number | null
          total_co2_saved?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "ratings_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
