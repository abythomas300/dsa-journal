class Clip:
    def __init__(self, data):
        self.data = data
        self.next = None
        print(f"Test: Text node created with data ''{self.data}'' " ) # test

class Clipboard:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0
        print("Test: Clipboard created") # test

    def add_clip(self, data):
        print("Test: add function executed") # test
        # create a node
        new_node = Clip(data)
        # if list is empty - set node as head and tail
        if self.head is None:
            self.tail = new_node
        else:
        # if list is not empty - point new node's next to the head of list
            new_node.next = self.head
            self.head = new_node
        # increment the counter and set new_node as list's head
        self.head = new_node
        self.length += 1
        print("Test: Text added to clipboard")
        return 

    def view_clips(self):
        print("Test: View clips function executed") # test
        # if list is empty: return None
        if self.length == 0:
            print("Clipboard is empty")
            return 
        else:
        # if list is not empty: store head's reference to 'current', print data, increment counter,  store next reference 
        # create 'current' variable to store reference to each node in list
            current = self.head
            count = 1
            while current is not None:
                print(f"{count}. {current.data}")
                current = current.next
                count += 1
            return

    def get_clipboard_length(self):
        if self.length is None:
            print("Clipboard is empty")
        else:
            print(f"There are {self.length} items in clipboard.")

# create a clipboard
clipboard = Clipboard()
# add some clips
clipboard.add_clip("first copied text")
clipboard.add_clip("second copied text")
clipboard.add_clip("third copied text")
clipboard.view_clips()
clipboard.get_clipboard_length()

    


