CREATE TABLE "tasks" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"completed" boolean DEFAULT false,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL
);
