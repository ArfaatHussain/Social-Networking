import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { ArrowUp, MessageCircle, Send, ArrowDown } from 'lucide-react-native'; // Import icons from Lucide
import Header from '../../components/shared/Header';
import ThreeDots from '../../components/shared/ThreeDots';

const CommentScreen = ({ route }) => {
  const post = route.params.post; // Extract the post object from the route parameters

  return (
    <View style={styles.container}>
      <Header />
      
      <ScrollView style={styles.contentContainer}>
        
        
        <View style={styles.postContainer}>
          <View style={styles.postHeader}>
            <Image
              source={{ uri: post.profilePictureUrl }}
              style={styles.avatar}
            />
            <View style={styles.postInfo}>
              <Text style={styles.username}>{post.user}</Text>
              <Text style={styles.time}>{post.time}</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>{post.category}</Text>
            </View>
            <ThreeDots />
          </View>

        
          <Text style={styles.postText}>
            {post.text}
          </Text>

      
          <Image
            source={{ uri: post.imageUrl }}
            style={styles.postImage}
          />

          
          <View style={styles.postActions}>
            <TouchableOpacity style={styles.actionButton}>
              <ArrowUp color="#fff" size={20} />
              <Text style={styles.actionText}>{post.likes}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <MessageCircle color="#F51F46" size={20} />
              <Text style={[styles.actionText,{color:'#F51F46'}]}>{post.comments}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Image source={require('../../../assets/images/Share.png')} style={{ height: 20, width: 20 }} resizeMode='contain' />
              <Text style={styles.actionText}>{post.shares}</Text> 
            </TouchableOpacity>
          </View>
        </View>

       
        <View style={styles.commentSection}>
         
          {Array(3).fill(0).map((_, index) => (
            <View key={index} style={styles.commentContainer}>
              <Image
                source={{ uri: post.profilePictureUrl }}
                style={styles.avatarSmall}
              />
              <View style={styles.commentContent}>
                <View style={styles.commentHeader}>
                  <Text style={styles.commentUsername}>{post.user}</Text>
                  <Text style={styles.commentTime}>{post.time}</Text>
                </View>
                <Text style={styles.commentText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                
                <View style={styles.commentActions}>
                  <TouchableOpacity style={styles.commentActionButton}>
                    <ArrowUp color="#F51F46" size={15} />
                    <Text style={styles.commentActionText}>56.9k</Text> 
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.commentActionButton}>
                    <Text style={styles.commentReplyText}>Reply</Text> 
                  </TouchableOpacity>
                  <ThreeDots /> 
                </View>

                {/* Replies Section */}
                <View style={{marginTop:10}} >
                 
                {Array(3).fill(0).map((_, replyIndex) => (
                  <View key={replyIndex} style={styles.replyContainer}>
                    <Image
                      source={{ uri: post.profilePictureUrl }}
                      style={styles.avatarSmall}
                    />
                    <View style={styles.replyContent}>
                      <View style={styles.commentHeader}>
                        <Text style={styles.commentUsername}>{post.user}</Text>
                        <Text style={styles.commentTime}>{post.time}</Text>
                      </View>
                      <Text style={styles.commentText}>
                        Reply to the comment here.
                      </Text>
                      <View style={styles.commentActions}>
                        <TouchableOpacity style={styles.commentActionButton}>
                          <ArrowUp color="#F51F46" size={15} />
                          <Text style={styles.commentActionText}>10k</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.commentActionButton}>
                          <Text style={styles.commentReplyText}>Reply</Text>
                        </TouchableOpacity>
                        <ThreeDots />
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            </View>
            </View>
          ))}
          
        </View> 
      </ScrollView>

      
      <View style={styles.commentInputContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder="Type your comment"
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity style={styles.sendButton}>
          <Send color="#F51F46" size={24} /> 
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Background color to match the theme
  },
  contentContainer: {
    paddingHorizontal: 15,
    marginVertical: 15,
  },
  postContainer: {
    marginBottom: 20,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  postInfo: {
    flex: 1,
    marginLeft: 10,
  },
  username: {
    color: '#fff',
    fontWeight: 'bold',
  },
  time: {
    color: '#777',
    fontSize: 12,
  },
  tag: {
    backgroundColor: '#400E17',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  tagText: {
    color: '#EFBEBE',
    fontSize: 12,
  },
  postText: {
    color: '#fff',
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    color: '#fff',
    marginLeft: 5,
  },
  commentSection: {
    borderTopColor: '#333',
    borderTopWidth: 1,
    paddingTop: 15,
  },
  commentContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    paddingLeft: 15,
    borderLeftColor: '#F51F46', // Red line for nested comments
    borderLeftWidth: 2,
  },
  commentContent: {
    flex: 1,
    marginLeft: 10,
  },
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  commentUsername: {
    color: '#fff',
    fontWeight: 'bold',
  },
  commentTime: {
    color: '#777',
    fontSize: 12,
  },
  commentText: {
    color: '#fff',
    marginBottom: 5,
  },
  commentActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  commentActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  commentActionText: {
    color: '#777',
    marginLeft: 5,
  },
  commentReplyText: {
    color: '#F51F46',
    marginLeft: 5,
  },
  replyContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: 30, // Margin from the left to indent replies
    marginRight: 10, // Margin from the right
  },
  replyContent: {
    flex: 1,
    marginLeft: 10,
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopColor: '#333',
    borderTopWidth: 1,
    backgroundColor: '#111', // Background color for the comment input area
  },
  commentInput: {
    flex: 1,
    backgroundColor: '#222',
    color: '#fff',
    paddingHorizontal: 15,
    borderRadius: 25,
  },
  sendButton: {
    marginLeft: 10,
    borderRadius: 25,
    padding: 10,
  },
  avatarSmall: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});

export default CommentScreen;
