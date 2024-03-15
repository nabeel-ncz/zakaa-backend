#!/bin/bash

# Run auth-service
cd auth/
npm run dev &

# Run user-service
cd user/
npm run dev &

# Run course-service
cd course/
npm run dev &

# Run notification-service
cd notification/
npm run dev &

# Run Gateway
cd gateway-dev/
npm run dev &

wait
