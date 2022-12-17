import "./App.css"
import { NavBar } from "./components/NavBar"
import { Banner } from "./components/Banner"
import { Skills } from "./components/Skills"
import { Projects } from "./components/Projects"
import { Studies } from "./components/Studies"
import { Works } from "./components/Works"
import { Footer } from "./components/Footer"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">

    {/* Snow flakes */}
    <div class="snowflakes" aria-hidden="true">
      <div class="snowflake">
      ❅
      </div>
      <div class="snowflake">
      ❆
      </div>
      <div class="snowflake">
      ❅
      </div>
      <div class="snowflake">
      ❆
      </div>
      <div class="snowflake">
      ❅
      </div>
      <div class="snowflake">
      ❆
      </div>
      <div class="snowflake">
        ❅
      </div>
      <div class="snowflake">
        ❆
      </div>
      <div class="snowflake">
        ❅
      </div>
      <div class="snowflake">
        ❆
      </div>
      <div class="snowflake">
        ❅
      </div>
      <div class="snowflake">
        ❆
      </div>
    </div>
    {/* Snow flakes */}

      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Studies />
      <Works />
      <Footer />
    </div>
  )
}

export default App
