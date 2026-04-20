class Clip:
    def __init__(self, data):
        self.data = data
        self.prev = None
        self.next = None

class Clipboard:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0
        self.max_length = None
        self.current_selected_clip = None

    def add_clip(self, data):
        # create a node
        new_node = Clip(data)
        
        # when max_length has already set 
        if self.max_length is not None and self.length+1 > self.max_length :

            # if list has only one element
            if self.length == 1:
                self.head = new_node
                self.tail = new_node
                return True
            elif self.length == 2:
                self.head.next = None
                self.tail = self.head
                new_node.next = self.head
                self.head.prev = new_node
                self.length -= 1
            else:
                # deleting the last node
                current = self.tail.prev
                current.next = None
                self.tail = current
                self.length -= 1
                # appending new clip
                new_node.next = self.head
                self.head.prev = new_node

        else: 
        # when max_length is not set
            if self.head is None: 
                self.tail = new_node
            else:
                new_node.next = self.head
                self.head.prev = new_node
                
        self.head = new_node
        self.tail.next = self.head
        self.head.prev = self.tail
        self.length += 1
        # self.current_selected_clip = None # reset current_selected_clip pointer
        return True

    def view_clips(self):
        # if list is empty
        if self.length == 0:
            return []
        else:
        # if list is not empty
            clips = []
            current = self.head
            count = 1
            while current is not self.tail:
                clips.append(current.data)
                current = current.next
                count += 1
            # appending tail node's data
            clips.append(current.data)
            count += 1
            return clips

    def get_length(self):
        if self.length == 0:
            return 0
        else:
            return self.length

    def paste(self, index):
        # if clipboard is empty: return message
        if self.length == 0:
            return []
        # if not empty: Traverse till that node and return data part
        elif index >=1 and index <= self.length:
            current = self.head
            currentIndex = 1
            while currentIndex < index:
                current = current.next
                currentIndex += 1
            return current.data
        else:
            return False

    def cap(self, limit):
        if limit >= 1 and limit <= self.length:
            current = self.head
            currentIndex = 1
            while currentIndex < limit:
                current = current.next
                currentIndex += 1
            current.next = None
            self.tail = current
            self.length = limit
            self.max_length = limit # set cap limit as clipboard's max_length
            self.current_selected_clip = None
            return True
        else:
            print(f"Invalid cap limit.")
            return False

    def clear(self):
        self.head = None
        self.tail = None
        self.length = 0
        self.current_selected_clip = None
        return True

    # method to go to next clip
    def next(self):
        # when list is empty
        if self.length == 0:
            return []
        else:
            # next command for the first time
            if self.current_selected_clip is None:
                self.current_selected_clip = self.head
                return self.current_selected_clip.data
            else:
                # next command not for the first time
                self.current_selected_clip = self.current_selected_clip.next
                return self.current_selected_clip.data

    # method to go to previous clip
    def prev(self):
        # when list is empty
        if self.length == 0:
            return []
        else:
            # prev command for the first time
            if self.current_selected_clip is None:
                self.current_selected_clip = self.head
                return self.current_selected_clip.data
            else:
                # prev command not for the first time
                self.current_selected_clip = self.current_selected_clip.prev
                return self.current_selected_clip.data
