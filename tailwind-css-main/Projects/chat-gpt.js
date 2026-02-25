{
  const button = document.getElementById("Chat-Btn");
  const div = document.getElementById("Chat-Btn-Div");

  var hide = 0;

  button.addEventListener("click", function () {
    if (hide == 0) {
      div.style.display = "block";
      hide = 1;
    } else {
      div.style.display = "none";
      hide = 0;
    }
  });
}

{
  const div = document.getElementById("Chat-Btn-Div");

  var hide = 0;

  div.addEventListener("click", function () {
    if (hide == 0) {
      div.style.display = "none";
      hide = 1;
    } else {
      div.style.display = "none";
      hide = 0;
    }
  });
}

{
  const button1 = document.getElementById("Chat-Btn1");
  const div1 = document.getElementById("Chat-Btn-Div1");

  var hide1 = 0;

  button1.addEventListener("click", function () {
    if (hide1 == 0) {
      div1.style.display = "block";
      button1.style.backgroundColor = "#2F2F2F";
      hide1 = 1;
    } else {
      div1.style.display = "none";
      button1.style.backgroundColor = "transparent";
      hide1 = 0;
    }
  });
}

{
  const div1 = document.getElementById("Chat-Btn-Div1");

  var hide1 = 0;

  div1.addEventListener("click", function () {
    if (hide1 == 0) {
      div1.style.display = "none";
      hide1 = 1;
    } else {
      div1.style.display = "none";
      hide1 = 0;
    }
  });
}

// Get the Button and Hidden Input Field by their IDs
const svgClick = document.getElementById("svg-click");
const hiddenInput = document.getElementById("hidden-input");

// Add a click event listener to the button
svgClick.addEventListener("click", () => {
  // Focus on the hidden input field
  hiddenInput.focus();
});

// pc pricing popup menu

{
  var gptfourdiv = document.getElementById("GPT-4-div");
  var poppricing = document.getElementById("Upgrade-your-plan");
  var closepricingsvg = document.getElementById("close-pricing");
  var upgradeplan = document.getElementById("upgrade-plan");

  upgradeplan.onclick = function () {
    poppricing.style.display = "block";
  };

  gptfourdiv.onclick = function () {
    poppricing.style.display = "block";
  };

  closepricingsvg.onclick = function () {
    poppricing.style.display = "none";
  };
}

// mobile pricing popup menu

{
  var gptfourdiv1 = document.getElementById("GPT-4-div1");
  var poppricing = document.getElementById("Upgrade-your-plan");
  var closepricingsvg = document.getElementById("close-pricing");
  const button1 = document.getElementById("Chat-Btn1");
  var upgradeplan = document.getElementById("upgrade-plan");

  upgradeplan.onclick = function () {
    poppricing.style.display = "block";
  };

  gptfourdiv1.onclick = function () {
    poppricing.style.display = "block";
    button1.style.backgroundColor = "transparent";
  };

  closepricingsvg.onclick = function () {
    poppricing.style.display = "none";
  };
}

{
  const navclose = document.getElementById("nav-close-btn");
  const navtranslate = document.getElementById("nav-translate");
  const navopen = document.getElementById("nav-list");

  navopen.onclick = function () {
    navtranslate.style.transform = "translateX(0)";
  };

  navclose.onclick = function () {
    navtranslate.style.transform = "translateX(-550px)";
  };
}

{
  function toggleDiv() {
    let opt = document.getElementById("three-options");
    opt.style.display = opt.style.display === "none" ? "block" : "none";
  }
}

// ==================== SIDEBAR TOGGLE WITH EMOJI ICON ====================
{
  const sidebarToggle = document.getElementById("sidebar-toggle");
  const sidebar = document.querySelector("nav.hidden.md\\:block");
  const mainContent = document.getElementById("main-content");
  
  let sidebarOpen = true;
  
  // Use text/emoji icons that are always visible
  const openIcon = "☰";
  const closedIcon = "▶";
  
  function updateSidebarIcon() {
    if (sidebarToggle) {
      const span = sidebarToggle.querySelector("span");
      if (span) {
        span.textContent = sidebarOpen ? openIcon : closedIcon;
      }
      sidebarToggle.title = sidebarOpen ? "Close Sidebar" : "Open Sidebar";
    }
  }
  
  if (sidebarToggle && sidebar) {
    // Set initial icon
    updateSidebarIcon();
    
    sidebarToggle.addEventListener("click", function () {
      sidebarOpen = !sidebarOpen;
      
      if (sidebarOpen) {
        sidebar.style.display = "block";
        sidebar.style.width = "";
        if (mainContent) {
          mainContent.style.width = "";
        }
      } else {
        sidebar.style.display = "none";
        if (mainContent) {
          mainContent.style.width = "100%";
        }
      }
      
      // Update icon after toggle
      updateSidebarIcon();
    });
  }
}

// ==================== DARK MODE TOGGLE ====================
let darkMode = false;

function toggleDarkMode() {
  darkMode = !darkMode;
  document.body.classList.toggle("dark-mode-active", darkMode);
  localStorage.setItem("darkMode", darkMode);
  
  const darkModeBtn = document.getElementById("dark-mode-btn");
  if (darkModeBtn) {
    darkModeBtn.innerHTML = darkMode ? "☀️ Light" : "🌙 Dark";
  }
}

// Check saved preference on load
if (localStorage.getItem("darkMode") === "true") {
  darkMode = false;
  toggleDarkMode();
}

// ==================== FATBOY ANIMATED ICON ====================
function replaceWithFatboyIcon() {
  const mainIcons = document.querySelectorAll(".bg-white.rounded-full");
  mainIcons.forEach(icon => {
    if (icon.querySelector("svg")) {
      const img = document.createElement("img");
      img.src = "https://cdn-icons-png.flaticon.com/512/1236/1236413.png";
      img.className = "fatboy-animated";
      img.style.cssText = "width:32px;height:32px;border-radius:50%;";
      icon.innerHTML = "";
      icon.appendChild(img);
    }
  });
}

// ==================== INITIALIZATION ====================
document.addEventListener("DOMContentLoaded", function() {
  replaceWithFatboyIcon();
  console.log("Fat-Boy AI initialized!");
});

window.toggleDarkMode = toggleDarkMode;

// ==================== PROMPT INPUT & SEND BUTTON FUNCTIONALITY ====================
function setupPromptFunctionality(promptInputId, sendBtnId) {
  const promptInput = document.getElementById(promptInputId);
  const sendBtn = document.getElementById(sendBtnId);
  
  if (promptInput && sendBtn) {
    // When user types in the prompt box
    promptInput.addEventListener('input', function() {
      if (promptInput.value.trim() !== '') {
        // Change button bg to white when there's text
        sendBtn.style.backgroundColor = '#ffffff';
      } else {
        // Revert to original color when empty
        sendBtn.style.backgroundColor = '#383838';
      }
    });
    
    // When user clicks the send button
    sendBtn.addEventListener('click', async function() {
      const message = promptInput.value.trim();
      if (message) {
        // Send the message to API
        try {
          // Show loading state
          sendBtn.style.backgroundColor = '#383838';
          promptInput.value = '';
          
          // API call - replace with your actual API endpoint
          const response = await fetch('YOUR_API_ENDPOINT_HERE', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: message })
          });
          
          const data = await response.json();
          
          // Display the AI response
          console.log('AI Response:', data);
          
        } catch (error) {
          console.error('Error:', error);
        }
      }
    });
    
    // Also allow pressing Enter to send
    promptInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        sendBtn.click();
      }
    });
  }
}

// Setup for both desktop and mobile
document.addEventListener('DOMContentLoaded', function() {
  setupPromptFunctionality('prompt-input', 'send-btn');
  setupPromptFunctionality('prompt-input-mobile', 'send-btn-mobile');
});
