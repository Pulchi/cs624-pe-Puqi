import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// 使用箭头函数定义组件
const CoreComponents = () => {
  const [favoriteCourse, setFavoriteCourse] = useState<string>('');

  // 定义核心课程
  const coreCourses: string[] = [
    'CS 504 Software Engineering',
    'CS 506 Programming for Computing',
    'CS 519 Cloud Computing Overview',
    'CS 533 Computer Architecture',
    'CS 555 C++ for Programmers',
    'CS 570 Database Management Systems',
    'CS 612 Data Visualization',
    'CS 624 Full-Stack Development',
  ];

  // 定义深度研究课程
  const depthCourses: string[] = [
    'CS 624 Full-Stack Development - Mobile App',
    'CS 628 Full-Stack Development - Web App',
  ];

  // 定义毕业设计课程
  const capstoneCourse: string[] = [
    'CS 687 Computer Science Capstone',
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {/* 使用Expo图标替代图片 */}
        <MaterialCommunityIcons name="school" size={100} color="#003366" style={styles.logo} />
        <Text style={styles.title}>MSCS Program at CityU</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter your favorite course:</Text>
        <TextInput
          style={styles.input}
          value={favoriteCourse}
          onChangeText={setFavoriteCourse}
          placeholder="e.g., CS 624"
        />
      </View>

      {favoriteCourse ? (
        <View style={styles.favoriteContainer}>
          <Text style={styles.favoriteText}>
            Your favorite course is: {favoriteCourse}
          </Text>
        </View>
      ) : null}

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Core Courses (8)</Text>
        {coreCourses.map((course, index) => (
          <Text key={index} style={styles.courseItem}>
            {course}
          </Text>
        ))}
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Depth of Study Courses (2)</Text>
        {depthCourses.map((course, index) => (
          <Text key={index} style={styles.courseItem}>
            {course}
          </Text>
        ))}
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Capstone Course (1)</Text>
        {capstoneCourse.map((course, index) => (
          <Text key={index} style={styles.courseItem}>
            {course}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

// 样式定义
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  favoriteContainer: {
    backgroundColor: '#e6f7ff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  favoriteText: {
    fontSize: 16,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#003366',
    backgroundColor: '#ddd',
    padding: 5,
  },
  courseItem: {
    fontSize: 16,
    marginBottom: 5,
    paddingLeft: 10,
    borderLeftWidth: 2,
    borderLeftColor: '#003366',
  },
});

export default CoreComponents;