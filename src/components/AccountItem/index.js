import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img 
                className={cx('avatar')} 
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1622483260657665.jpeg?x-expires=1666339200&x-signature=0%2FHP7xJWJsvbyKoeuMGGa%2FXfbqQ%3D" 
                alt="duc phuc"
            />
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>Nguyen Van A</span>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </h4>
                    <span className={cx('username')}>nguyenvana</span>
                </div>
        </div>
    );
}

export default AccountItem;