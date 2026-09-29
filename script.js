function showMyInfo() {
  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var age = document.getElementById("age").value;
  var birthday = document.getElementById("birthday").value;
  var phone = document.getElementById("phone").value;
  var city = document.getElementById("city").value;
  var school = document.getElementById("school").value;
  var course = document.getElementById("course").value;
  var bio = document.getElementById("bio").value;

  var color = " ";
  var selectedColor = document.querySelector('input[name="color"]:checked');
  if (selectedColor != null) {
    color = selectedColor.value;
  }

  var subject = " ";
  var selectedSubject = document.querySelector('input[name="subject"]:checked');
  if (selectedSubject != null) {
    subject = selectedSubject.value;
  }

  var hobbies = " ";
  var checkedHobbies = document.querySelectorAll('input[name="hobby"]:checked');
  for (var i = 0; i < checkedHobbies.length; i++) {
    hobbies = hobbies + checkedHobbies[i].value + " ";
  }

  var answer = document.getElementsByClassName("answer");
  answer[0].textContent = fullName;
  answer[1].textContent = email;
  answer[2].textContent = age;
  answer[3].textContent = birthday;
  answer[4].textContent = phone;
  answer[5].textContent = city;
  answer[6].textContent = school;
  answer[7].textContent = course;
  answer[8].textContent = color;
  answer[9].textContent = subject;
  answer[10].textContent = hobbies;
  answer[11].textContent = bio;

  var card = document.querySelector("article");
  card.style.borderTopColor = color;

  document.getElementById("message").textContent = "Display Successfully!";
}

function clearForm() {
  var inputs = document.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type == "radio" || inputs[i].type == "checkbox") {
      inputs[i].checked = false;
    } else {
      inputs[i].value = "";
    }
  }

  document.getElementById("course").value = "";
  document.getElementById("bio").value = "";

  var answer = document.getElementsByClassName("answer");
  for (var i = 0; i < answer.length; i++) {
    answer[i].textContent = "";
  }

  document.getElementById("message").textContent =
    'Nothing to show yet. Click "Show My Info" first.';
}
