"use strict";
/**
 * <Model>
 * ベースモデル
 */

class Base {
  // 各モデルのprops(基本情報)からデフォルト値でインスタンスを生成
  constructor(props) {
    this.props = props;
    this.data = {};
    for (var p in props) {
      this.data[p] = p.default;
    }
  }

  // paramsを渡してモデルにセット
  set(params) {
    for (var key in params) {
      if (params.hasOwnProperty(key)) {
        this.data[key] = params[key];
      }
    }
  }

  // 取得メソッド
  get() {
    return this.data;
  }

  // 型でバリデーション
  validate() {
    const result = {err: false, key: null};
    for (var d in this.data) {
      const type = this.props[d].type;
      if (!(typeof d === 'string' || d instanceof String)) {
        result = {err: true, key: d};
        break;
      }
    }
    return result;
  }
}

module.exports = Base;
