// Domain Types
export interface User {
	id: number;
	username: string;
	email: string;
	role: UserRole;
	status: UserStatus;
	createdAt: string;
	lastLogin: string | null;
}

export interface Post {
	id: number;
	title: string;
	content: string;
	author: string;
	category: Category;
	status: PostStatus;
	views: number;
	createdAt: string;
}

// Enum Types
export type UserStatus = 'active' | 'inactive' | 'suspended';
export type PostStatus = 'published' | 'draft' | 'archived' | 'pending' | 'rejected';
export type UserRole = 'admin' | 'moderator' | 'user' | 'guest';
export type Category = 'development' | 'design' | 'accessibility';

// Form Data Types
export type UserFormData = Omit<User, 'id' | 'createdAt' | 'lastLogin'>;
export type PostFormData = Omit<Post, 'id' | 'createdAt' | 'views'>;

// Entity Type Union
export type Entity = User | Post;
export type EntityType = 'user' | 'post';
