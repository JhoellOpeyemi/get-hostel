const FaqBox = ({ question, answer, toggle, index, selected }) => {
  return (
    <div className="faq-box">
      <button className="faq-question" onClick={() => toggle(index)}>
        <h4>{question}</h4>
        <span>
          {selected === index ? (
            // Minus sign
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="faq-sign faq-minus"
            >
              <path
                d="M15.8334 9.5H3.16675"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            //   Plus sign
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="faq-sign faq-plus"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.5 2.375C9.65747 2.375 9.8085 2.43756 9.91985 2.54891C10.0312 2.66026 10.0938 2.81128 10.0938 2.96875V8.90625H16.0312C16.1887 8.90625 16.3397 8.96881 16.4511 9.08016C16.5624 9.19151 16.625 9.34253 16.625 9.5C16.625 9.65747 16.5624 9.8085 16.4511 9.91985C16.3397 10.0312 16.1887 10.0938 16.0312 10.0938H10.0938V16.0312C10.0938 16.1887 10.0312 16.3397 9.91985 16.4511C9.8085 16.5624 9.65747 16.625 9.5 16.625C9.34253 16.625 9.19151 16.5624 9.08016 16.4511C8.96881 16.3397 8.90625 16.1887 8.90625 16.0312V10.0938H2.96875C2.81128 10.0938 2.66026 10.0312 2.54891 9.91985C2.43756 9.8085 2.375 9.65747 2.375 9.5C2.375 9.34253 2.43756 9.19151 2.54891 9.08016C2.66026 8.96881 2.81128 8.90625 2.96875 8.90625H8.90625V2.96875C8.90625 2.81128 8.96881 2.66026 9.08016 2.54891C9.19151 2.43756 9.34253 2.375 9.5 2.375V2.375Z"
                fill="black"
              />
            </svg>
          )}
        </span>
      </button>
      <div className={selected === index ? "faq-ans active" : "faq-ans"}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FaqBox;
