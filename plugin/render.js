/* eslint-disable */

var __assign = (this && this.__assign) || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (const p in s) { if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]; }
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
const __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, { enumerable: true, get() { return m[k]; } });
}) : (function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
}));
const __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
  Object.defineProperty(o, 'default', { enumerable: true, value: v });
}) : function (o, v) {
  o.default = v;
});
const __importStar = (this && this.__importStar) || function (mod) {
  if (mod && mod.__esModule) return mod;
  const result = {};
  if (mod != null) for (const k in mod) if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(((resolve) => { resolve(value); })); }
  return new (P || (P = Promise))(((resolve, reject) => {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  }));
};
const __generator = (this && this.__generator) || function (thisArg, body) {
  let _ = { label: 0, sent() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }; let f; let y; let t; let
    g;
  return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol === 'function' && (g[Symbol.iterator] = function () { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
    if (f) throw new TypeError('Generator is already executing.');
    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0: case 1: t = op; break;
          case 4: _.label++; return { value: op[1], done: false };
          case 5: _.label++; y = op[1]; op = [0]; continue;
          case 7: op = _.ops.pop(); _.trys.pop(); continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
            if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
            if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
            if (t[2]) _.ops.pop();
            _.trys.pop(); continue;
        }
        op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
    }
    if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
};
Object.defineProperty(exports, '__esModule', { value: true });
const react_1 = __importStar(require('react'));

const mini_simulator_1 = window.MiniSimulator;
/**
 * 自定义 demo 渲染组件，接收编译时传递的 props，在运行时渲染 demo 组件
 */
exports.default = (function (props) {
  const _a = (0, react_1.useState)({ width: 395, height: 740 }); const lyraSize = _a[0]; const
    setLyraSize = _a[1];
  (0, react_1.useEffect)(() => {
    let simulator;
    const propsDeferer = new Promise(((resolve) => {
      if (process.env.NODE_ENV === 'development') {
        // dev 环境用 transformer 返回的本地地址
        resolve({ appCdnBaseUrl: props.appCdnBaseUrl });
      } else {
        // prod 环境用 render.alipay.com 302 后的 CDN 地址，避免云构建解压报错
        // @ts-ignore
        window.fetch(`${window.publicPath}ng-main.tar`, { method: 'HEAD' }).then((res) => {
          resolve({ tarUrl: res.url });
        });
      }
    }));
    // 等待 props 获取
    propsDeferer.then((launchProps) => {
      simulator = (0, mini_simulator_1.mount)(__assign({
        container: 'lyra-service-container',
        hideStatusBar: true,
        theme:'light',
        hideTopBar: true,
        hideBottomBar: true,
        defaultDeviceName:'iPhone 13',
        internalStorageSeparatedKey:'umi',
        clearStore: true,
        initWithAutoZoom: true,
        transparentBackground:true,
        launchParams: {
          page: props.pages,
          appxRouteFramework: 'YES',
        },
        beforeDevicePreview(params) {
          return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, _a => [2 /* return */, {
              appCdnBaseUrl: params.appCdnBaseUrl,
              launchParams: __assign(__assign({}, params.launchParams), { page: props.pages }),
            }]);
          });
        } }, launchProps));
      simulator.on(mini_simulator_1.EMiniSimulatorEvents.Resize, setLyraSize);
    });
    return function () {
      simulator === null || simulator === void 0 ? void 0 : simulator.unmount();
    };
  }, [props.appCdnBaseUrl]);
  return react_1.default.createElement('div', { id: 'lyra-service-container', style: lyraSize });
});
// # sourceMappingURL=render.js.map
