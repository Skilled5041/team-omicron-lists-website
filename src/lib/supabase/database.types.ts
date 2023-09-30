export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
	public: {
		Tables: {
			badges: {
				Row: {
					created_at: string;
					description: string | null;
					how_to_obtain: string;
					id: number;
					image_path: string | null;
					name: string;
				};
				Insert: {
					created_at?: string;
					description?: string | null;
					how_to_obtain: string;
					id?: number;
					image_path?: string | null;
					name: string;
				};
				Update: {
					created_at?: string;
					description?: string | null;
					how_to_obtain?: string;
					id?: number;
					image_path?: string | null;
					name?: string;
				};
				Relationships: [];
			};
			challenge_list: {
				Row: {
					created_at: string | null;
					creators: string[] | null;
					gddp_id: string | null;
					id: number;
					last_updated: string | null;
					main_id: string | null;
					minimum_progress: number | null;
					publisher: string | null;
					rank: number | null;
					verification_url: string | null;
					verifier: string | null;
				};
				Insert: {
					created_at?: string | null;
					creators?: string[] | null;
					gddp_id?: string | null;
					id?: number;
					last_updated?: string | null;
					main_id?: string | null;
					minimum_progress?: number | null;
					publisher?: string | null;
					rank?: number | null;
					verification_url?: string | null;
					verifier?: string | null;
				};
				Update: {
					created_at?: string | null;
					creators?: string[] | null;
					gddp_id?: string | null;
					id?: number;
					last_updated?: string | null;
					main_id?: string | null;
					minimum_progress?: number | null;
					publisher?: string | null;
					rank?: number | null;
					verification_url?: string | null;
					verifier?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "challenge_list_publisher_fkey";
						columns: ["publisher"];
						referencedRelation: "profiles";
						referencedColumns: ["username"];
					},
					{
						foreignKeyName: "challenge_list_verifier_fkey";
						columns: ["verifier"];
						referencedRelation: "profiles";
						referencedColumns: ["username"];
					}
				];
			};
			challenge_list_info: {
				Row: {
					created_at: string;
					extended_list_count: number;
					id: number;
					mainlist_count: number;
				};
				Insert: {
					created_at?: string;
					extended_list_count: number;
					id?: number;
					mainlist_count: number;
				};
				Update: {
					created_at?: string;
					extended_list_count?: number;
					id?: number;
					mainlist_count?: number;
				};
				Relationships: [];
			};
			challenge_list_records: {
				Row: {
					id: number;
					level_id: number | null;
					progress: number;
					username: string | null;
					video_proof: string;
				};
				Insert: {
					id?: number;
					level_id?: number | null;
					progress: number;
					username?: string | null;
					video_proof: string;
				};
				Update: {
					id?: number;
					level_id?: number | null;
					progress?: number;
					username?: string | null;
					video_proof?: string;
				};
				Relationships: [
					{
						foreignKeyName: "challenge_list_records_level_id_fkey";
						columns: ["level_id"];
						referencedRelation: "challenge_list";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "challenge_list_records_username_fkey";
						columns: ["username"];
						referencedRelation: "profiles";
						referencedColumns: ["username"];
					}
				];
			};
			challenge_list_submissions: {
				Row: {
					created_at: string | null;
					id: number;
					level_id: number | null;
					notes: string | null;
					player: string | null;
					progress: number | null;
					raw_footage_url: string | null;
					video_url: string | null;
				};
				Insert: {
					created_at?: string | null;
					id?: number;
					level_id?: number | null;
					notes?: string | null;
					player?: string | null;
					progress?: number | null;
					raw_footage_url?: string | null;
					video_url?: string | null;
				};
				Update: {
					created_at?: string | null;
					id?: number;
					level_id?: number | null;
					notes?: string | null;
					player?: string | null;
					progress?: number | null;
					raw_footage_url?: string | null;
					video_url?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "challenge_list_submissions_level_id_fkey";
						columns: ["level_id"];
						referencedRelation: "challenge_list";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "challenge_list_submissions_player_fkey";
						columns: ["player"];
						referencedRelation: "profiles";
						referencedColumns: ["username"];
					}
				];
			};
			demons_list: {
				Row: {
					created_at: string;
					creators: string[] | null;
					gddp_id: string | null;
					id: number;
					last_updated: string | null;
					main_id: string | null;
					minimum_progress: number | null;
					publisher: string | null;
					rank: number | null;
					verification_url: string | null;
					verifier: string | null;
				};
				Insert: {
					created_at?: string;
					creators?: string[] | null;
					gddp_id?: string | null;
					id?: number;
					last_updated?: string | null;
					main_id?: string | null;
					minimum_progress?: number | null;
					publisher?: string | null;
					rank?: number | null;
					verification_url?: string | null;
					verifier?: string | null;
				};
				Update: {
					created_at?: string;
					creators?: string[] | null;
					gddp_id?: string | null;
					id?: number;
					last_updated?: string | null;
					main_id?: string | null;
					minimum_progress?: number | null;
					publisher?: string | null;
					rank?: number | null;
					verification_url?: string | null;
					verifier?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "demons_list_publisher_fkey";
						columns: ["publisher"];
						referencedRelation: "profiles";
						referencedColumns: ["username"];
					},
					{
						foreignKeyName: "demons_list_verifier_fkey";
						columns: ["verifier"];
						referencedRelation: "profiles";
						referencedColumns: ["username"];
					}
				];
			};
			demons_list_info: {
				Row: {
					created_at: string;
					extended_list_count: number;
					id: number;
					mainlist_count: number;
				};
				Insert: {
					created_at?: string;
					extended_list_count: number;
					id?: number;
					mainlist_count: number;
				};
				Update: {
					created_at?: string;
					extended_list_count?: number;
					id?: number;
					mainlist_count?: number;
				};
				Relationships: [];
			};
			demons_list_records: {
				Row: {
					id: string;
					level_id: number | null;
					progress: number;
					username: string | null;
					video_proof: string;
				};
				Insert: {
					id?: string;
					level_id?: number | null;
					progress: number;
					username?: string | null;
					video_proof: string;
				};
				Update: {
					id?: string;
					level_id?: number | null;
					progress?: number;
					username?: string | null;
					video_proof?: string;
				};
				Relationships: [
					{
						foreignKeyName: "demons_list_records_level_id_fkey";
						columns: ["level_id"];
						referencedRelation: "demons_list";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "demons_list_records_username_fkey";
						columns: ["username"];
						referencedRelation: "profiles";
						referencedColumns: ["username"];
					}
				];
			};
			demons_list_submissions: {
				Row: {
					created_at: string;
					id: number;
					level_id: number | null;
					notes: string | null;
					player: string;
					progress: number;
					raw_footage_url: string;
					video_url: string;
				};
				Insert: {
					created_at?: string;
					id?: number;
					level_id?: number | null;
					notes?: string | null;
					player: string;
					progress: number;
					raw_footage_url: string;
					video_url: string;
				};
				Update: {
					created_at?: string;
					id?: number;
					level_id?: number | null;
					notes?: string | null;
					player?: string;
					progress?: number;
					raw_footage_url?: string;
					video_url?: string;
				};
				Relationships: [
					{
						foreignKeyName: "demons_list_submissions_level_id_fkey";
						columns: ["level_id"];
						referencedRelation: "demons_list";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "demons_list_submissions_player_fkey";
						columns: ["player"];
						referencedRelation: "profiles";
						referencedColumns: ["username"];
					}
				];
			};
			obtained_badges: {
				Row: {
					badge_id: number | null;
					created_at: string;
					id: number;
					username: string;
				};
				Insert: {
					badge_id?: number | null;
					created_at?: string;
					id?: number;
					username: string;
				};
				Update: {
					badge_id?: number | null;
					created_at?: string;
					id?: number;
					username?: string;
				};
				Relationships: [
					{
						foreignKeyName: "obtained_badges_badge_id_fkey";
						columns: ["badge_id"];
						referencedRelation: "badges";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "obtained_badges_username_fkey";
						columns: ["username"];
						referencedRelation: "profiles";
						referencedColumns: ["username"];
					}
				];
			};
			profiles: {
				Row: {
					admin: boolean | null;
					country: string | null;
					id: string;
					levels_beaten: number;
					updated_at: string | null;
					username: string | null;
				};
				Insert: {
					admin?: boolean | null;
					country?: string | null;
					id: string;
					levels_beaten?: number;
					updated_at?: string | null;
					username?: string | null;
				};
				Update: {
					admin?: boolean | null;
					country?: string | null;
					id?: string;
					levels_beaten?: number;
					updated_at?: string | null;
					username?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "profiles_id_fkey";
						columns: ["id"];
						referencedRelation: "users";
						referencedColumns: ["id"];
					}
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
}
