# Use an official Node runtime as the base image
FROM node:18-alpine

# Set the working directory in the container to /app
WORKDIR .

# Copy the current directory contents into the container at /app
COPY . .
# Install any needed packages specified in package.json
RUN npm install --force

ARG wwwport
ENV wwwport=$wwwport
# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the app when the container starts
CMD ["npm", "start"]