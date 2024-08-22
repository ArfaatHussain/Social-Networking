import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { ArrowUp, MessageCircle, Share2, Send } from 'lucide-react-native'; // Import icons from Lucide
import Header from '../../components/shared/Header';
import ThreeDots from '../../components/shared/ThreeDots';
const CommentScreen = () => {
  return (
    <View style={styles.container}>
      <Header /> 
      <ScrollView style={styles.contentContainer}>
        <View style={styles.postContainer}>
          <View style={styles.postHeader}>
            <Image
              source={{ uri: 'https://s3-alpha-sig.figma.com/img/6bca/b7d8/48c29ae3985c5658cf7a79702acf04ae?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mLvOM1FDQUQ9w6X-ZQNfuBhWPHSAL3aXLlC07R81IuXSXwbZxPT4mIz4g4UI3fxspyyn35oAmkAq~a2IHfWDDfrBQou~lhSwLXWzrgHbEIXsm-Ycw0oDw69I8YvfKPIQTokUORFcUvSS8AZP6HXvhD3VGXidSHBg69iqIIWKWu1HZkNILEcTDxT5FOeSKw7Jb50JS6Gcd95fcCNRvPYsdE4Pt086H5JAFqpaUGPDQBsaF2-J6MdnPrzJJruHhABCEQtZfGBIev3TMO-O18E4Jf8p8CJfHDRfMmBURsmsleTiM26CmJRS2d4YRcIR0XuLY1vCKG2KHBqUPpjIYvRgmw__' }}
              style={styles.avatar}
            />
            <View style={styles.postInfo}>
              <Text style={styles.username}>Siber Koza</Text>
              <Text style={styles.time}>15 hours ago</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Music</Text>
            </View>
            <ThreeDots />
          </View>
          <Text style={styles.postText}>
            Have a great day with my amazing client all the way from New York
          </Text>
          <Image
            source={{ uri: 'https://avatar.iran.liara.run/public/37' }}
            style={styles.postImage}
          />
          <View style={styles.postActions}>
            <TouchableOpacity style={styles.actionButton}>
              <ArrowUp color="#fff" size={20} />
              <Text style={styles.actionText}>56.9k</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <MessageCircle color="#fff" size={20} />
              <Text style={styles.actionText}>4682</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Share2 color="#fff" size={20} />
              <Text style={styles.actionText}>62</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Comments */}
        <View style={styles.commentContainer}>
          <Image
            source={{ uri: 'https://s3-alpha-sig.figma.com/img/6bca/b7d8/48c29ae3985c5658cf7a79702acf04ae?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mLvOM1FDQUQ9w6X-ZQNfuBhWPHSAL3aXLlC07R81IuXSXwbZxPT4mIz4g4UI3fxspyyn35oAmkAq~a2IHfWDDfrBQou~lhSwLXWzrgHbEIXsm-Ycw0oDw69I8YvfKPIQTokUORFcUvSS8AZP6HXvhD3VGXidSHBg69iqIIWKWu1HZkNILEcTDxT5FOeSKw7Jb50JS6Gcd95fcCNRvPYsdE4Pt086H5JAFqpaUGPDQBsaF2-J6MdnPrzJJruHhABCEQtZfGBIev3TMO-O18E4Jf8p8CJfHDRfMmBURsmsleTiM26CmJRS2d4YRcIR0XuLY1vCKG2KHBqUPpjIYvRgmw__' }}
            style={styles.avatar}
          />
          <View style={styles.commentContent}>
            <Text style={styles.commentText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <View style={styles.commentActions}>
              <TouchableOpacity style={styles.commentActionButton}>
                <ArrowUp color="#fff" size={15} />
                <Text style={styles.commentActionText}>56.9k</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.commentActionButton}>
                <Text style={styles.commentActionText}>Reply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Comment Input */}
      <View style={styles.commentInputContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder="Type your comment"
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity style={styles.sendButton}>
          <Send color="#fff" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  contentContainer: {
    paddingHorizontal: 15,
    marginVertical:15
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
  commentContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  commentContent: {
    flex: 1,
    marginLeft: 10,
  },
  commentText: {
    color: '#fff',
    marginBottom: 5,
  },
  commentActions: {
    flexDirection: 'row',
    alignItems: 'center',
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
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopColor: '#333',
    borderTopWidth: 1,
  },
  commentInput: {
    flex: 1,
    backgroundColor: '#222',
    color: '#fff',
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#7A1DAD',
    borderRadius: 20,
    padding: 10,
  },
});

export default CommentScreen;
