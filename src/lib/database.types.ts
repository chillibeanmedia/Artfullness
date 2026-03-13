export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          display_name: string | null
          avatar_url: string | null
          bio: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          display_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          display_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      artists: {
        Row: {
          id: string
          user_id: string
          artist_name: string
          story: string | null
          mental_health_focus: string | null
          commission_rate: number
          total_sales: number
          total_commissions_paid: number
          is_approved: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          artist_name: string
          story?: string | null
          mental_health_focus?: string | null
          commission_rate?: number
          total_sales?: number
          total_commissions_paid?: number
          is_approved?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          artist_name?: string
          story?: string | null
          mental_health_focus?: string | null
          commission_rate?: number
          total_sales?: number
          total_commissions_paid?: number
          is_approved?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      products: {
        Row: {
          id: string
          artist_id: string
          title: string
          description: string | null
          price: number
          image_url: string | null
          image_urls: string[]
          category: string | null
          dimensions: string | null
          medium: string | null
          stock_quantity: number
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          artist_id: string
          title: string
          description?: string | null
          price: number
          image_url?: string | null
          image_urls?: string[]
          category?: string | null
          dimensions?: string | null
          medium?: string | null
          stock_quantity?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          artist_id?: string
          title?: string
          description?: string | null
          price?: number
          image_url?: string | null
          image_urls?: string[]
          category?: string | null
          dimensions?: string | null
          medium?: string | null
          stock_quantity?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      cart_items: {
        Row: {
          id: string
          user_id: string
          product_id: string
          quantity: number
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          product_id: string
          quantity?: number
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          product_id?: string
          quantity?: number
          created_at?: string
        }
      }
      orders: {
        Row: {
          id: string
          user_id: string
          total_amount: number
          status: string
          shipping_address: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          total_amount: number
          status?: string
          shipping_address?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          total_amount?: number
          status?: string
          shipping_address?: Json | null
          created_at?: string
          updated_at?: string
        }
      }
      order_items: {
        Row: {
          id: string
          order_id: string
          product_id: string
          artist_id: string
          quantity: number
          price_at_purchase: number
          commission_rate: number
          commission_amount: number
          artist_amount: number
          created_at: string
        }
        Insert: {
          id?: string
          order_id: string
          product_id: string
          artist_id: string
          quantity: number
          price_at_purchase: number
          commission_rate: number
          commission_amount: number
          artist_amount: number
          created_at?: string
        }
        Update: {
          id?: string
          order_id?: string
          product_id?: string
          artist_id?: string
          quantity?: number
          price_at_purchase?: number
          commission_rate?: number
          commission_amount?: number
          artist_amount?: number
          created_at?: string
        }
      }
      commissions: {
        Row: {
          id: string
          artist_id: string
          order_item_id: string
          amount: number
          artist_amount: number
          status: string
          created_at: string
          paid_at: string | null
        }
        Insert: {
          id?: string
          artist_id: string
          order_item_id: string
          amount: number
          artist_amount: number
          status?: string
          created_at?: string
          paid_at?: string | null
        }
        Update: {
          id?: string
          artist_id?: string
          order_item_id?: string
          amount?: number
          artist_amount?: number
          status?: string
          created_at?: string
          paid_at?: string | null
        }
      }
    }
  }
}
