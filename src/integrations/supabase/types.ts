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
      chart_history: {
        Row: {
          chart_config: Json
          created_at: string | null
          csv_file_id: string | null
          data_insight: string | null
          id: string
          prompt: string
          tokens_used: number
        }
        Insert: {
          chart_config: Json
          created_at?: string | null
          csv_file_id?: string | null
          data_insight?: string | null
          id?: string
          prompt: string
          tokens_used?: number
        }
        Update: {
          chart_config?: Json
          created_at?: string | null
          csv_file_id?: string | null
          data_insight?: string | null
          id?: string
          prompt?: string
          tokens_used?: number
        }
        Relationships: [
          {
            foreignKeyName: "chart_history_csv_file_id_fkey"
            columns: ["csv_file_id"]
            isOneToOne: false
            referencedRelation: "csv_files"
            referencedColumns: ["id"]
          },
        ]
      }
      clients: {
        Row: {
          birthday: string | null
          clients_id: number
          created_at: string
          email: string
          gender: string | null
          height: number | null
          join_date: string | null
          last_visit: string | null
          membership_type: string | null
          name: string
          phone: string | null
          smart_watch_rented: boolean | null
          updated_at: string
          usage_hours: number | null
          user_id: string
          weight: number | null
        }
        Insert: {
          birthday?: string | null
          clients_id?: number
          created_at?: string
          email: string
          gender?: string | null
          height?: number | null
          join_date?: string | null
          last_visit?: string | null
          membership_type?: string | null
          name: string
          phone?: string | null
          smart_watch_rented?: boolean | null
          updated_at?: string
          usage_hours?: number | null
          user_id: string
          weight?: number | null
        }
        Update: {
          birthday?: string | null
          clients_id?: number
          created_at?: string
          email?: string
          gender?: string | null
          height?: number | null
          join_date?: string | null
          last_visit?: string | null
          membership_type?: string | null
          name?: string
          phone?: string | null
          smart_watch_rented?: boolean | null
          updated_at?: string
          usage_hours?: number | null
          user_id?: string
          weight?: number | null
        }
        Relationships: []
      }
      csv_files: {
        Row: {
          created_at: string | null
          data: Json
          display_name: string
          filename: string
          id: string
        }
        Insert: {
          created_at?: string | null
          data: Json
          display_name: string
          filename: string
          id?: string
        }
        Update: {
          created_at?: string | null
          data?: Json
          display_name?: string
          filename?: string
          id?: string
        }
        Relationships: []
      }
      group_challenges: {
        Row: {
          challenge_id: number
          challenge_name: string
          challenge_status: string | null
          created_at: string
          description: string | null
          end_date: string
          start_date: string
          total_participants: number | null
          updated_at: string
          winning_criteria: string | null
        }
        Insert: {
          challenge_id?: number
          challenge_name: string
          challenge_status?: string | null
          created_at?: string
          description?: string | null
          end_date: string
          start_date: string
          total_participants?: number | null
          updated_at?: string
          winning_criteria?: string | null
        }
        Update: {
          challenge_id?: number
          challenge_name?: string
          challenge_status?: string | null
          created_at?: string
          description?: string | null
          end_date?: string
          start_date?: string
          total_participants?: number | null
          updated_at?: string
          winning_criteria?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          id: string
          updated_at: string
          username: string
        }
        Insert: {
          created_at?: string
          id: string
          updated_at?: string
          username: string
        }
        Update: {
          created_at?: string
          id?: string
          updated_at?: string
          username?: string
        }
        Relationships: []
      }
      smart_watch_sensor_data: {
        Row: {
          calories_burned: number | null
          client_id: number
          created_at: string
          distance_covered: number | null
          heart_rate: number | null
          oxygen_level: number | null
          sensor_data_id: number
          steps_taken: number | null
          workout_id: number
        }
        Insert: {
          calories_burned?: number | null
          client_id: number
          created_at?: string
          distance_covered?: number | null
          heart_rate?: number | null
          oxygen_level?: number | null
          sensor_data_id?: number
          steps_taken?: number | null
          workout_id: number
        }
        Update: {
          calories_burned?: number | null
          client_id?: number
          created_at?: string
          distance_covered?: number | null
          heart_rate?: number | null
          oxygen_level?: number | null
          sensor_data_id?: number
          steps_taken?: number | null
          workout_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "smart_watch_sensor_data_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["clients_id"]
          },
          {
            foreignKeyName: "smart_watch_sensor_data_workout_id_fkey"
            columns: ["workout_id"]
            isOneToOne: false
            referencedRelation: "workouts"
            referencedColumns: ["workout_id"]
          },
        ]
      }
      trainers: {
        Row: {
          active_clients: number | null
          created_at: string
          email: string
          name: string
          phone: string | null
          shift_end: string | null
          shift_start: string | null
          specialization: string | null
          trainer_id: number
          updated_at: string
          user_id: string
        }
        Insert: {
          active_clients?: number | null
          created_at?: string
          email: string
          name: string
          phone?: string | null
          shift_end?: string | null
          shift_start?: string | null
          specialization?: string | null
          trainer_id?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          active_clients?: number | null
          created_at?: string
          email?: string
          name?: string
          phone?: string | null
          shift_end?: string | null
          shift_start?: string | null
          specialization?: string | null
          trainer_id?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_credits: {
        Row: {
          created_at: string
          credit: number | null
          email: string | null
          id: string
          ip_address: string
          remaining_credits: number
          user_id: string | null
        }
        Insert: {
          created_at?: string
          credit?: number | null
          email?: string | null
          id?: string
          ip_address: string
          remaining_credits?: number
          user_id?: string | null
        }
        Update: {
          created_at?: string
          credit?: number | null
          email?: string | null
          id?: string
          ip_address?: string
          remaining_credits?: number
          user_id?: string | null
        }
        Relationships: []
      }
      workouts: {
        Row: {
          calories_burned: number | null
          client_id: number
          created_at: string
          end_time: string | null
          equipment_used: string | null
          group_challenge_id: number | null
          start_time: string
          trainer_id: number | null
          updated_at: string
          workout_id: number
        }
        Insert: {
          calories_burned?: number | null
          client_id: number
          created_at?: string
          end_time?: string | null
          equipment_used?: string | null
          group_challenge_id?: number | null
          start_time: string
          trainer_id?: number | null
          updated_at?: string
          workout_id?: number
        }
        Update: {
          calories_burned?: number | null
          client_id?: number
          created_at?: string
          end_time?: string | null
          equipment_used?: string | null
          group_challenge_id?: number | null
          start_time?: string
          trainer_id?: number | null
          updated_at?: string
          workout_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "workouts_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["clients_id"]
          },
          {
            foreignKeyName: "workouts_group_challenge_id_fkey"
            columns: ["group_challenge_id"]
            isOneToOne: false
            referencedRelation: "group_challenges"
            referencedColumns: ["challenge_id"]
          },
          {
            foreignKeyName: "workouts_trainer_id_fkey"
            columns: ["trainer_id"]
            isOneToOne: false
            referencedRelation: "trainers"
            referencedColumns: ["trainer_id"]
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
