


INSERT INTO category (id, name, created_at) VALUES
                                                (1001, 'Work', '2023-01-01T00:00:00'),
                                                (1002, 'Personal', '2023-02-01T00:00:00'),
                                                (1003, 'Ideas', '2023-03-01T00:00:00'),
                                                (1004, 'Projects', '2023-04-01T00:00:00'),
                                                (1005, 'Miscellaneous', '2023-05-01T00:00:00');


INSERT INTO notes (id, title, content, status, category_id) VALUES
                                                                (1001, 'Meeting Notes', 'These are the notes from the meeting held on Monday. We discussed project timelines, assigned tasks, and set deadlines. The key points are as follows: 1. Project A will be completed by the end of the month. 2. Task assignments have been finalized. 3. The next meeting is scheduled for next Monday.', 'UNARCHIVED', 1001),
                                                                (1002, 'Grocery List', 'Here is the grocery list for the week: 1. Milk 2. Bread 3. Eggs 4. Butter 5. Cheese 6. Fruits 7. Vegetables 8. Chicken 9. Fish 10. Snacks', 'UNARCHIVED', 1002),
                                                                (1003, 'Startup Idea', 'I have this great idea for a startup. It involves creating an app that helps users track their daily habits and goals. The app will feature reminders, progress tracking, and motivational quotes to keep users engaged and motivated. This could be a game-changer in the self-improvement market.', 'UNARCHIVED', 1003),
                                                                (1004, 'Project Plan', 'The project plan for the new website redesign is as follows: 1. Research and gather requirements 2. Create wireframes and mockups 3. Develop the frontend using React 4. Develop the backend using Node.js 5. Integrate the frontend and backend 6. Test the website thoroughly 7. Deploy the website to the production server.', 'UNARCHIVED', 1004),
                                                                (1005, 'Random Thoughts', 'These are some random thoughts that crossed my mind today: 1. What if we could travel through time? 2. How does the universe truly work? 3. The potential of AI is both fascinating and scary. 4. The beauty of nature is unparalleled. 5. The power of human connection is amazing.', 'UNARCHIVED', 1005),
                                                                (1006, 'Client Feedback', 'Received feedback from the client regarding the latest project deliverables. They are pleased with the progress but have requested some changes: 1. Update the homepage banner to reflect the new branding. 2. Add a testimonial section on the about page. 3. Improve the loading speed of the website.', 'ARCHIVED', 1001),
                                                                (1007, 'Workout Routine', 'Here is my workout routine for the next month: 1. Monday: Upper body strength training 2. Tuesday: Cardio and core workout 3. Wednesday: Lower body strength training 4. Thursday: Rest day 5. Friday: Full body workout 6. Saturday: Yoga and stretching 7. Sunday: Rest day', 'ARCHIVED', 1002),
                                                                (1008, 'App Feature List', 'The following features will be included in the app: 1. User authentication and profiles 2. Real-time notifications 3. In-app messaging 4. Data visualization and analytics 5. Social media integration 6. Offline mode support 7. Multi-language support', 'ARCHIVED', 1003),
                                                                (1009, 'Marketing Strategy', 'The marketing strategy for the next quarter includes: 1. Social media campaigns focusing on new features 2. Email newsletters to keep users engaged 3. Influencer partnerships to reach a wider audience 4. Paid advertising on relevant platforms 5. Content marketing through blog posts and videos', 'ARCHIVED', 1004),
                                                                (1010, 'Book Recommendations', 'Here are some book recommendations based on recent reads: 1. "Atomic Habits" by James Clear 2. "Sapiens: A Brief History of Humankind" by Yuval Noah Harari 3. "The Power of Habit" by Charles Duhigg 4. "Thinking, Fast and Slow" by Daniel Kahneman 5. "Educated" by Tara Westover', 'ARCHIVED', 1005);


INSERT INTO users (id, firstname, lastname, password, role, username) VALUES
                                                                (1, 'Guevara', 'Andre', '$2a$10$A8VC70A7K2ZIX/cYQ.Rz6uUTIeqiSneJlXGT7p5NNBd1hU6GzvPOu', 'USER', 'guevara@ensolvers.com');
