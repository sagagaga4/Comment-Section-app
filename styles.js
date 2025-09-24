/* General body styling */
body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 /* background: #171715;*/
  background:#303446;
  font-family: system-ui, sans-serif;
  padding: 20px;
}

/* Title */
h2 {
  color: #c6d0f5;
  margin-bottom: 15px;
}

/* Input + button container */
.input-container {
  display: flex;
  gap: 8px; /* space between input and button */
  margin-bottom: 10px;
  width: 300px; /* matches comment section */
}

/* Input box */
.inputbox {
  flex: 1; /* make input expand to fill space */
  border: 3px solid rgb(115, 121, 148);
  border-radius: 10px;
  height: 30px;
  padding: 5px 10px;
  background-color: #51576d;
  color: #c6d0f5;
}

/* Add button */
.btn {
  color: white;
  background-color: #8caaee;
  border: 2px solid #8caaee;
  border-radius: 5px;
  padding: 6px 12px;
  cursor: pointer;
  transition: 0.2s;
}

.btn:hover {
  background-color: #99d1db;
  border-color: #99d1db;
}

/* Comment section */
.comment-section {
  font-size: 12px;
  color: white;
  width: 300px;
  max-height: 400px;      /* limit height */
  overflow-y: auto;       /* scroll if content overflows */
  padding: 10px;
  border-radius: 8px;
  background-color: #303446;
}

/* Individual comment/task wrapper */
.commentWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #626880;
  padding: 6px 8px;
  margin: 5px 0;
  border-radius: 5px;
}

/*Check Button*/
.cbtn {
  margin-left:auto;
  font-size:6px;
  color:#232634;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s;
}
/*Edit Button*/
.ebtn {
  font-size:6px;
  color:#232634;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s;
}

/* Delete button */
.xbtn {
  color:#232634;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s;
}
.commentWrapper.checked {
  background-color: #a6d189; /* light green */
}
