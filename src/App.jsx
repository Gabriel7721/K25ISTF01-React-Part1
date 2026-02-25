import { useState } from "react";
import "./App.css";
import MyButton, {
  MyButtonPrimary,
  MyButtonWarning,
} from "./components/01.create-and-nest-components/MyButton";
import MyAvatar from "./components/03.adding-style/MyAvatar";
import MyData from "./components/04.display-data/MyData";
import CheckLogin from "./components/05.conditional/CheckLogin";
import LoginForm from "./components/05.conditional/LoginForm";
import ShoppingList from "./components/06.Lists/ShoppingList";
import EventOnclick from "./components/07.Event-Response/EventOnclick";
import Couting from "./components/08.Update State/Couting";

const App = () => {
  // Top-Level Component
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>React Basics</h1>

      <section className="section-one">
        <h3>1. Create and nesting components</h3>
        <MyButton />
        <p>
          Lưu ý rằng <code>{"<MyButton/>"}</code> bắt đầu bằng chữ cái viết hoa.
          Đó là cách ta nhận biết nó là một React component. Tên của các
          component luôn phải bắt đầu bằng một chữ cái viết hoa, trong khi các
          thẻ HTML phải viết thường.
        </p>

        <h3>2. Export và Export Default</h3>
        <MyButtonPrimary />
        <MyButtonWarning />

        <p>
          Mỗi file chỉ tồn tại duy nhất 1 export default. Nó thể hiện đây là
          main component, khi import không cần sử dụng dấu ngoặc nhọn và có thể
          đặt tên tùy ý.
        </p>

        <p>
          Mỗi file có thể có nhiều export và không giới hạn số lượng (được gọi
          là named export), khi import phải sử dụng dấu ngoặc nhọn và tên phải
          trùng khớp với tên đã export.
        </p>

        <h3>3. Writing markup with JSX</h3>
        <p>
          JSX là cú pháp mở rộng của JavaScript và được phân tích theo quy tắc
          ngữ pháp nghiêm ngặt hơn HTML. Trong khi HTML cho phép một số trường
          hợp viết rút gọn hoặc tự động suy luận cấu trúc, JSX yêu cầu tuân thủ
          chặt chẽ quy tắc đóng thẻ và cấu trúc cây.
        </p>
        <ul>
          <li>
            Thứ nhất, tất cả các thẻ trong JSX phải được đóng đầy đủ. Trong
            HTML, một số thẻ như <code>{"<br>, <img>, <input>"}</code> có thể
            được viết mà không cần dấu đóng riêng. Tuy nhiên, trong JSX, mọi thẻ
            tự đóng phải được viết dưới dạng self-closing tag với ký hiệu{" "}
            <code>{"/>"}</code>, ví dụ <code>{"<br />, <img />"}</code>. Điều
            này xuất phát từ việc JSX được chuyển đổi thành lời gọi hàm
            React.createElement; vì vậy, cú pháp phải tương thích với cấu trúc
            biểu thức của JavaScript, không thể mơ hồ như HTML.
          </li>
          <li>
            Thứ hai, mỗi Component trong React phải trả về duy nhất một phần tử
            JSX gốc. Nguyên nhân không phải do hạn chế của HTML, mà do quy tắc
            của JavaScript: một Function chỉ có thể trả về một giá trị duy nhất.
            Vì JSX thực chất là một biểu thức JavaScript, nên Component phải trả
            về một React element duy nhất đại diện cho toàn bộ subtree giao
            diện. Nếu cần hiển thị nhiều phần tử cùng cấp, ta phải bao chúng
            trong một phần tử cha chung.
          </li>
        </ul>

        <h3>4. Adding Styles</h3>
        <MyAvatar />

        <p>Để import ảnh ta có 2 cách:</p>
        <ul>
          <li>
            Cách 1: Import từ folder "src/assets/". Ảnh được xem như một module
            và phải import vào file JavaScript trước khi sử dụng. Ví dụ: import
            avatar from "./assets/avatar.png". Sau đó truyền vào thuộc tính src
            của thẻ img. Cách này cho phép bundler xử lý tối ưu hóa, đổi tên
            file và quản lý dependency.
          </li>

          <li>
            Cách 2: Import từ folder public/. Ảnh trong thư mục này không đi qua
            bundler mà được phục vụ trực tiếp bởi server. Khi sử dụng, chỉ cần
            truyền đường dẫn tuyệt đối từ root, ví dụ: img src="/avatar.png"
            alt="Avatar" . Cách này phù hợp với tài nguyên tĩnh không cần xử lý
            trong quá trình build.
          </li>
        </ul>

        <p>Để style cho components, ta có 2 cách:</p>
        <ul>
          <li>
            Cách 1: Style từ file CSS truyền thống. Ta tạo file.css riêng, ví dụ
            App.css, sau đó import vào component bằng cú pháp import
            "./App.css";. Các class được khai báo trong CSS sẽ được áp dụng
            thông qua thuộc tính className, ví dụ: className="container". Đây là
            cách tổ chức tách biệt giữa cấu trúc và trình bày.
          </li>

          <li>
            Cách 2: Style trực tiếp trong component bằng Inline Style hoặc CSS
            Module:
            <ol>
              <li>
                Với Inline Style, ta truyền một Object JavaScript vào thuộc tính
                styles, ví dụ: color: "red", fontSize: "16px" . Tên thuộc tính
                phải viết theo camelCase.
              </li>
              <li>
                Với CSS Module, ta tạo file Component.module.css, import như một
                module: import styles from "./Component.module.css", và sử dụng
                dưới dạng styles.container. Cách này giúp cô lập phạm vi style
                và tránh xung đột tên class.
              </li>
            </ol>
          </li>
        </ul>

        <h3>Display Data</h3>
        <MyData />

        <h3>Conditional Render</h3>
        <CheckLogin />

        <h3>Lists Rendering</h3>
        <ShoppingList />

        <h3>Event Response</h3>
        <EventOnclick />

        <h3>Sharing state</h3>

        <Couting onClick={handleClick} count={count} />
        <Couting onClick={handleClick} count={count} />

        <h3>Bootstrap</h3>
        <button className="btn btn-primary">Button</button>
      </section>
    </div>
  );
};

export default App;
