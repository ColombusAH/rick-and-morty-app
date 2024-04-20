-- Create the users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Create the favorites table
CREATE TABLE IF NOT EXISTS favorites (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    item_id VARCHAR(255) NOT NULL,
    item_type VARCHAR(50) NOT NULL  -- 'character', 'episode', or 'location'
);

-- Insert sample users
INSERT INTO users (username, password) VALUES
('john_doe', '$2b$10$rkvMom7eiSdvwIBvkeUcgusU9wDBb71co/WwQpAEhM7.J0tknvWCS'),
('jane_doe', '$2b$10$rkvMom7eiSdvwIBvkeUcgusU9wDBb71co/WwQpAEhM7.J0tknvWCS')
ON CONFLICT (username) DO NOTHING;

-- Insert sample favorites
INSERT INTO favorites (user_id, item_id, item_type) VALUES
(1, '1', 'character'),  -- Assuming '1' is a valid character ID from the Rick and Morty API
(1, '2', 'episode'),    -- Assuming '2' is a valid episode ID
(2, '3', 'location')    -- Assuming '3' is a valid location ID
ON CONFLICT DO NOTHING;
