import Avatar from "components/Avatar"

export default function Devit({ avatar, userName, content, createdAt, id }) {
  return (
    <>
      <article>
        <div>
          <Avatar alt={userName} src={avatar} />
        </div>
        <section>
          <header>
            <strong>{userName}</strong>
            <span>·</span>
            <span>{createdAt}</span>
          </header>
          <p>{content}</p>
        </section>
      </article>
      <style jsx>{`
        article {
          border-bottom: 1px solid #eee;
          display: flex;
          padding: 10px 15px;
        }

        div {
          padding-right: 16px;
        }

        p {
          line-height: 1.3125;
          margin: 0;
        }

        span {
          margin: 0 5px;
        }

        span {
          color: #555;
          font-size: 14px;
        }
      `}</style>
    </>
  )
}
